import { insertionSort } from '../insertionSort'
import { describe, expect, test } from 'vitest'

describe('insertionSort', () =>
{
  test.each([
    [[2], [2]],
    [[5, 2], [2, 5]],
    [[8, 3, 5, 7, 1], [1, 3, 5, 7, 8]],
    [[3, 2, 5, 8, 10, 7, 22, 1], [1, 2, 3, 5, 7, 8, 10, 22]]
  ])('insertionSort(%j) should be %j', (arg1, expected) =>
  {
    expect(insertionSort(arg1)).toStrictEqual(expected)
  })
})
