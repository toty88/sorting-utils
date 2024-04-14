import { insertionSort } from '../insertionSort'
import { describe, expect, test } from 'vitest'

describe('insertionSort', () => {
  test('should return empty array for empty input', () => {
    const emptyArray: number[] = []
    const sortedEmptyArray = insertionSort(emptyArray)
    expect(sortedEmptyArray).toBe(emptyArray)
  })

  test('should return single-element array unchanged', () => {
    const singleElementArray = [5]
    const sortedSingleElementArray = insertionSort(singleElementArray)
    expect(sortedSingleElementArray).toBe(singleElementArray)
  })

  test.each([
    [
      [5, 2],
      [2, 5]
    ],
    [
      [5, 2, 1],
      [1, 2, 5]
    ],
    [
      [8, 3, 5, 7, 1],
      [1, 3, 5, 7, 8]
    ],
    [
      [3, 2, 5, 8, 10, 7, 22, 1],
      [1, 2, 3, 5, 7, 8, 10, 22]
    ],
    [
      [3, 2, 5, 8, 10, 7, 22, 10, 1],
      [1, 2, 3, 5, 7, 8, 10, 10, 22]
    ]
  ])('insertionSort(%j) should be %j', (arg1, expected) => {
    expect(insertionSort(arg1)).toStrictEqual(expected)
  })
})
