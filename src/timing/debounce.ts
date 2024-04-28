import type { GenericFunction } from '@/types'

/** @see  debounce callback should be issued once within set time, if debounce called again time gets reset */
export const debounce = (cb: GenericFunction, delay: number): GenericFunction => {
  let timeOut: NodeJS.Timeout

  return function debounceFn(...args: Parameters<GenericFunction>): ReturnType<GenericFunction> {
    clearTimeout(timeOut)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    timeOut = setTimeout(() => cb(args), delay)
  }
}
