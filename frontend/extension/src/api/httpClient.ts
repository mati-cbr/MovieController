interface RequestOptions extends RequestInit {
    headers?: Record<string, string>;
  }
  
  interface ApiResponse<T = any> {
    data: T;
    statusCode: number;
    timestamp: string;
  }
  
// const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_URL = 'http://localhost:8000/api/'
  
  class HttpClient {
    async request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
      const url = `${API_URL}${endpoint}`;
      
      const headers: Record<string, string> = {
        ...options.headers,
      };
    
      if (['POST', 'PUT', 'PATCH'].includes(options.method || '')) {
        headers['Content-Type'] = 'application/json';
      }

      const token = typeof window !== 'undefined' 
        ? localStorage.getItem('token') || sessionStorage.getItem('token') || getCookieToken()
        : null;
      
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    
      const config = {
        ...options,
        headers,
      };
    
      try {
        // For debugging
        // if (process.env.NODE_ENV !== 'production') {
        //   console.log(`API request: ${options.method || 'GET'} ${url}`);
        // }
    
        const response = await fetch(url, config);

        if (response.status === 401) {
          if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            
            const currentPath = window.location.pathname;
            if (!currentPath.startsWith('/auth/')) {
              window.location.href = '/auth/signin';
              throw new Error('Session expired. Please log in again.');
            }
          }
        }

        if (response.status === 204 || response.headers.get('content-length') === '0') {
          return {
            data: { success: true } as unknown as T,
            statusCode: response.status,
            timestamp: new Date().toISOString()
          };
        }
    
        let data: any;
        
        try {
          data = await response.json();
        } catch (e) {
          if (response.ok) {
            return {
              data: { success: true } as unknown as T,
              statusCode: response.status,
              timestamp: new Date().toISOString()
            };
          }

          const text = await response.text();
          console.error('Received invalid JSON response:', text);
          throw new Error('Server returned an invalid response format');
        }

        if (!response.ok) {
          throw new Error(data.message || 'An error occurred');
        }
        
        return data;
      } catch (error) {
        console.error('API request error:', error);
        throw error;
      }
    }
  
    // HTTP verb methods (get, post, put, patch, delete) remain the same
    // ...
  }

  function getCookieToken(): string | null {
    if (typeof document === 'undefined') return null;
    
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'token') return value;
    }
    return null;
  }
  
  export const httpClient = new HttpClient();