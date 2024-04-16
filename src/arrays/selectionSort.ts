import { swap } from '@/arrays'

/**
 * Sorts an array of numbers using the selection sort algorithm.
 *
 * Selection sort iterates through the array, finding the minimum element
 * and swapping it with the element at the current position. This process repeats
 * for each element in the array, effectively selecting the minimum element
 * at each iteration and placing it in its correct sorted position.
 *
 * Time complexity: O(n^2) in average and worst cases
 * Space complexity: O(1) (in-place sorting)
 *
 * @param arr The array of <T> to be sorted
 * @param compare A function which takes two T arguments, compare them and returns a boolean
 * @returns A new sorted array (does not modify the original array)
 */
export const selectionSort = <T>(arr: T[], compare: (left: T, right: T) => boolean): T[] => {
  if (arr.length < 2) return arr
  let makeSwap = true
  let minIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (compare(arr[minIndex], arr[i])) {
      minIndex = i
      makeSwap = false
    }
  }
  const newArr = [...arr]
  if (!makeSwap) {
    swap(newArr, 0, minIndex)
  }
  return [newArr[0]].concat(selectionSort(newArr.slice(1), compare))
}
