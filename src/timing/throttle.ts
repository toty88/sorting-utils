import type { GenericFunction } from '@/types'

/**
 * @param cb: callback function of type: (...args: any[]) => any
 * @param delay: expected time in ms to lock cb before it can be triggerd
 * @returns callback function passed as argument
 */
/** @see  throttle locks cb within given time before it can be triggered again */

export const throttle = (cb: GenericFunction, delay: number): GenericFunction => {
  let timeOut: NodeJS.Timeout | undefined

  return function throttleFn(...args: Parameters<GenericFunction>): ReturnType<GenericFunction> {
    if (timeOut !== undefined) {
      return
    }
    timeOut = setTimeout(() => {
      timeOut = undefined
    }, delay)

    return cb(args)
  }
}
