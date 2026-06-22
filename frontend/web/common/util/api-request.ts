import {getApiUrl} from '@common/util/get-api-url'
import {serverOnly$} from 'vite-env-only/macros'

export const apiRequest = async <ApiResponse>(
  path: `/${string}`,
  fetchOptions?: RequestInit,
) => {
  // Odkomentować, gdy backend będzie w pełni gotowy
  // const base = getApiUrl()

  // const url = `${base}${path}`
  // const response = await fetch(url, fetchOptions)
  // const json = (await response.json()) as ApiResponse

  // const log = serverOnly$((await import('@server/util/log')).log)
  // if (log) {
  //   log.debug(json, `request to ${url}`)
  // }

  // Powinno być `return json` ale jeszcze backend nie jest gotowy
  return [{}]
}
