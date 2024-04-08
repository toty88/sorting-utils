import { swap } from '@/arrays/swap'
import { describe, expect, test } from 'vitest'

describe('swap', () =>
{
  test.each([
    [[5, 2], 0, 0, [5, 2]],
    [[5, 2], 0, 1, [2, 5]],
    [[5, 2], 1, 0, [2, 5]],
    [[5, 2], 1, 1, [5, 2]]
  ])('swap(%j %j %j) should be %j', (arg1, arg2, arg3, expected) =>
  {
    expect(swap(arg1, arg2, arg3)).toStrictEqual(expected)
  })
})
