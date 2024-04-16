import { type AnyFunction } from '@/types/types'

/**
 * The ReturnType utility type obtains the return type of a function type
 * The Parameters utility type lets you get the parameters of a function type.
 * type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
 */

/** @see  throttle callback should be issued once then locked until time has passed */
export const throttle = <T extends AnyFunction>(
  cb: T,
  delay: number
): ((...args: Parameters<T>) => ReturnType<AnyFunction>) => {
  let timeOut: NodeJS.Timeout | undefined

  return function throttleFn(...args: Parameters<T>): ReturnType<AnyFunction> {
    if (timeOut !== undefined) {
      return
    }
    timeOut = setTimeout(() => {
      timeOut = undefined
    }, delay)

    return cb(...args)
  }
}
