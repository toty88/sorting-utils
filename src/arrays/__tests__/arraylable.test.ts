import { arraylable } from '../arraylable'
import { describe, expect, test } from 'vitest'

describe('arraylable', () => {
  test.each([
    [
      [1, 2],
      [1, 2]
    ],
    [[], []],
    ['fran', []],
    [1, []],
    [null, []],
    [undefined, []],
    [{}, []],
    [{ name: 'toty' }, []]
  ])('arraylable(%j) should be %j', (arg, expected) => {
    expect(arraylable(arg)).toEqual(expected)
  })
})
