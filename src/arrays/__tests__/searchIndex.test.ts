import { searchIndex } from '../searchIndex'
import { describe, expect, test } from 'vitest'

describe('searchIndex', () => {
  test('should return -1 for empty input', () => {
    const emptyArray: number[] = []
    const index = searchIndex(emptyArray, 2)
    expect(index).toEqual(-1)
  })

  test.each([
    [[1], 1, 0],
    [[1], 2, -1],
    [[1, 2], 2, 1],
    [[1, 2, 3, 4], 3, 2],
    [[1, 2, 3, 4, 5, 7, 8, 9], 6, -1],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], 8, 7],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], 15, -1]
  ])('searchIndex(%j %j) should be %j', (arg1, arg2, expected) => {
    expect(searchIndex(arg1, arg2)).toBe(expected)
  })
})
