import type { DeleteUserInput, GetUserInput, UpdateUserInput, User } from './types';

import { httpClient } from '../httpClient';

export const useGetUser = ( input: GetUserInput ) => {
    let result;
    
    try {
        result = httpClient.request<User>('user', { 
            method: 'GET',
            body: input.id.transform.toString()
        })
    }
    catch (e) {
        throw new Error(e);
    }

    return {
        result
    };
}
