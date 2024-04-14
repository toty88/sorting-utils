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
})
