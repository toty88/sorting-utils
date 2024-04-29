/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { GenericFunction } from '@/types'

/**
 * @param cb: callback function of type: (...args: any[]) => any
 * @param delay: expected time in ms before trigger cb
 * @returns callback function passed as argument
 */
/** @see  debounce locks cb within given time but time gets reseted if debounce called again */
export const debounce = (cb: GenericFunction, delay: number): GenericFunction => {
  let timeOut: NodeJS.Timeout

  return function debounceFn(...args: Parameters<GenericFunction>): ReturnType<GenericFunction> {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => cb(args), delay)
  }
}
