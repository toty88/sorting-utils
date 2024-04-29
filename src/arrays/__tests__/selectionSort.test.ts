import { selectionSort } from '../selectionSort'
import { describe, expect, test } from 'vitest'

describe('asc selectionSort with numbers', () => {
  test.each([
    [[], []],
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
    expect(selectionSort(arg1, (a, b) => a > b)).toStrictEqual(expected)
  })
})

describe('desc selectionSort with numbers', () => {
  test.each([
    [[], []],
    [[2], [2]],
    [
      [5, 2],
      [5, 2]
    ],
    [
      [8, 3, 5, 7, 1],
      [8, 7, 5, 3, 1]
    ],
    [
      [3, 2, 5, 8, 10, 7, 22, 1],
      [22, 10, 8, 7, 5, 3, 2, 1]
    ]
  ])('selectionSort(%j) should be %j', (arg1, expected) => {
    expect(selectionSort(arg1, (a, b) => a < b)).toStrictEqual(expected)
  })
})

describe('asc selectionSort with strings', () => {
  test.each([
    [[], []],
    [['hello'], ['hello']],
    [
      ['hello', 'world', 'awesome'],
      ['awesome', 'hello', 'world']
    ],
    [
      ['hey', 'whats', 'up?'],
      ['hey', 'up?', 'whats']
    ]
  ])('selectionSort(%j) should be %j', (arg1, expected) => {
    expect(selectionSort(arg1, (a, b) => a > b)).toStrictEqual(expected)
  })
})

describe('desc selectionSort with strings', () => {
  test.each([
    [[], []],
    [['hello'], ['hello']],
    [
      ['hello', 'world', 'awesome'],
      ['world', 'hello', 'awesome']
    ],
    [
      ['hey', 'whats', 'up?'],
      ['whats', 'up?', 'hey']
    ]
  ])('desStrSelectionSort(%j) should be %j', (arg1, expected) => {
    expect(selectionSort(arg1, (a, b) => a < b)).toStrictEqual(expected)
  })
})
