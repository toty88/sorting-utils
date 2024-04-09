import { selectionSort } from '../selectionSort'
import { describe, expect, test } from 'vitest'

describe('selectionSort', () => {
  test.each([
    [[2], [2]],
    [
      [5, 2],
      [2, 5]
    ],
    [
      [8, 3, 5, 7, 1],
      [1, 3, 5, 7, 8]
    ],
    [
      [3, 2, 5, 8, 10, 7, 22, 1],
      [1, 2, 3, 5, 7, 8, 10, 22]
    ]
  ])('selectionSort(%j) should be %j', (arg1, expected) => {
    expect(selectionSort(arg1)).toStrictEqual(expected)
  })
})
