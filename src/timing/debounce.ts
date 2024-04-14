import { type AnyFunction } from '@/types/types'

/**
 * The Parameters utility type lets you get the parameters of a function type.
 * type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
 */

/** @see  debounce callback should be issued once within set time, if debounce called again time gets reset */
export const debounce = <T extends AnyFunction>(cb: T, delay: number): ((...args: Parameters<T>) => void) => {
  let timeOut: NodeJS.Timeout

  return function debounceFn(...args: Parameters<T>): void {
    // if (timeOut !== undefined) {
    //   clearTimeout(timeOut)
    // }
    clearTimeout(timeOut)
    timeOut = setTimeout(() => cb(args), delay)
  }
}
