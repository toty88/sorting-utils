import { quickSort } from '@/arrays/quickSort'
import { describe, expect, test } from 'vitest'

describe('ascuickSort', () =>
{
  test.each([
    [[], []],
    [[2], [2]],
    [
      [3, 2],
      [2, 3]
    ],
    [
      [9, 1, 3],
      [1, 3, 9]
    ],
    [
      [5, 10, 3, 17, 8],
      [3, 5, 8, 10, 17]
    ],
    [
      [5, 10, 3, 17, 8, 14, 20, 1, 7, 7, 11, 32, 19],
      [1, 3, 5, 7, 7, 8, 10, 11, 14, 17, 19, 20, 32]
    ]
  ])('ascquickSort(%j) should be %j', (arg1, expected) =>
  {
    expect(quickSort(arg1, (a, b) => a < b)).toStrictEqual(expected)
  })
})

describe('desQuickSort', () =>
{
  test.each([
    [[], []],
    [[2], [2]],
    [
      [2, 3],
      [3, 2]
    ],
    [
      [3, 1, 9],
      [9, 3, 1]
    ],
    [
      [5, 10, 3, 17, 8],
      [17, 10, 8, 5, 3]
    ],
    [
      [5, 10, 3, 17, 8, 14, 20, 1, 7, 7, 11, 32, 19],
      [32, 20, 19, 17, 14, 11, 10, 8, 7, 7, 5, 3, 1]
    ]
  ])('desQuickSort(%j) should be %j', (arg1, expected) =>
  {
    expect(quickSort(arg1, (a, b) => a > b)).toStrictEqual(expected)
  })
})

describe('desStrQuickSort', () =>
{
  test.each([
    [
      ['hola', 'mundo', 'cruel'],
      ['mundo', 'hola', 'cruel']
    ],
    [
      ['che', 'todo', 'bien?'],
      ['todo', 'che', 'bien?']
    ]
  ])('desStrQuickSort(%j) should be %j', (arg1, expected) =>
  {
    expect(quickSort(arg1, (a, b) => a > b)).toStrictEqual(expected)
  })
})

describe('ascObjQuickSort', () =>
{
  test.each([
    [
      [
        { id: 5, name: 'test5' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
        { id: 15, name: 'test15' },
        { id: 9, name: 'test9' }
      ],
      [
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
        { id: 5, name: 'test5' },
        { id: 9, name: 'test9' },
        { id: 15, name: 'test15' }
      ]
    ]
  ])('ascObjQuickSort(%j) should be %j', (arg1, expected) =>
  {
    expect(quickSort(arg1, (a, b) => a.id < b.id)).toStrictEqual(expected)
  })
})
