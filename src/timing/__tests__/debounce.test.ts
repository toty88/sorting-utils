import { debounce } from '@/timing/debounce'
import { it, describe, expect, vi, beforeEach, afterEach } from 'vitest'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.resetAllMocks()
  })

  // it('should not clear non-existent timeout (mutant behavior)', () => {
  //   const originalFn = vi.fn();
  //   const debouncedMutant = debounce(originalFn, 100); // Use the mutated version (debounceMutant)

  //   debouncedMutant(); // Call debounced function once

  //   // Simulate a short delay (less than the delay time) to ensure no timeout is set
  //   vi.advanceTimersByTime(50);

  //   expect(originalFn).not.toHaveBeenCalled(); // Shouldn't call yet

  //   // Call debounced function again (should trigger immediate execution due to missing timeout check)
  //   debouncedMutant();
  //   vi.advanceTimersByTime(51);
  //   expect(originalFn).toHaveBeenCalledTimes(1); // Should call immediately due to the mutant
  // });

  it("generic function shouldn't call yet", () => {
    const originalFn = vi.fn()
    const debounceFn = debounce(originalFn, 200)
    debounceFn()
    vi.advanceTimersByTime(100)
    expect(originalFn).not.toHaveBeenCalled()
  })

  it('generic function should be called once', () => {
    const originalFn = vi.fn()
    const debounceFn = debounce(originalFn, 200)
    debounceFn()
    debounceFn()
    expect(originalFn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(201)
    expect(originalFn).toHaveBeenCalledTimes(1)
  })

  it('generic function should be called once', () => {
    const originalFn = vi.fn()
    const debounceFn = debounce(originalFn, 200)
    debounceFn()
    debounceFn()
    vi.advanceTimersByTime(201)
    expect(originalFn).toHaveBeenCalledTimes(1)
  })

  it('generic function should be called twice', () => {
    const originalFn = vi.fn()
    const debounceFn = debounce(originalFn, 200)
    debounceFn(5)
    vi.advanceTimersByTime(201)
    expect(originalFn).toHaveBeenCalledTimes(1)
    debounceFn(1)
    vi.advanceTimersByTime(201)
    expect(originalFn).toHaveBeenCalledTimes(2)
  })

  it('myReduceFn([1, 2, 3]) fn should return 6', () => {
    const myReduceFn = (x: number[]): number =>
      x.reduce((prev: number, curr: number) => {
        const x = prev
        return x + curr
      }, 0)
    const originalFn = vi.fn(myReduceFn)
    const debouncedFn = debounce(originalFn, 200)
    debouncedFn()
    debouncedFn()
    vi.advanceTimersByTime(201)
    expect(originalFn([1, 2, 3])).toBe(6)
  })
})
