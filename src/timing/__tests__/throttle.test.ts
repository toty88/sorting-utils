import { throttle } from '@/timing/throttle'
import { it, describe, expect, vi, beforeEach, afterEach } from 'vitest'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.resetAllMocks()
  })
  it('generic function should be called once', () => {
    const originalFn = vi.fn()
    const throttleFn = throttle(originalFn, 200)
    throttleFn()
    throttleFn()
    vi.advanceTimersByTime(201)
    expect(originalFn).toHaveBeenCalledTimes(1)
  })

  it('generic function should be called twice', () => {
    const originalFn = vi.fn()
    const throttleFn = throttle(originalFn, 200)
    throttleFn()
    throttleFn()
    vi.advanceTimersByTime(201)
    expect(originalFn).toHaveBeenCalledTimes(1)
    throttleFn()
    throttleFn()
    throttleFn()
    throttleFn()
    vi.advanceTimersByTime(201)
    expect(originalFn).toHaveBeenCalledTimes(2)
  })
  it('multiplyByTwo(2) fn should return 4', () => {
    const multiplyByTwo = (x: number): number => x * 2
    const originalFn = vi.fn(multiplyByTwo)
    const throttleFn = throttle(originalFn, 200)
    throttleFn()
    throttleFn()
    vi.advanceTimersByTime(201)
    expect(originalFn(2)).toBe(4)
  })

  it('myReduceFn([1, 2, 3]) fn should return 6', () => {
    const myReduceFn = (x: number[]): number =>
      x.reduce((prev: number, curr: number) => {
        const x = prev
        return x + curr
      }, 0)
    const originalFn = vi.fn(myReduceFn)
    const throttleFn = throttle(originalFn, 200)
    throttleFn()
    throttleFn()
    vi.advanceTimersByTime(201)
    expect(originalFn([1, 2, 3])).toBe(6)
  })
})
