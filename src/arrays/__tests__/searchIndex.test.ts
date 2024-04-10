import { searchIndex } from '../searchIndex'
import { describe, expect, test } from 'vitest'

describe('searchIndex', () => {
  test.each([
    [[], 2, -1],
    [[1, 2], 2, 1],
    [[1, 2, 3, 4], 3, 2],
    [[1, 2, 3, 4, 5, 7, 8, 9], 6, -1],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], 8, 7],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], 15, -1]
  ])('searchIndex(%j %j) should be %j', (arg1, arg2, expected) => {
    expect(searchIndex(arg1, arg2)).toBe(expected)
  })
})
