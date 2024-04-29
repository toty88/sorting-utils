import { merge } from '@/arrays/merge'

/**
 * Sorts an array of <T> using the merge sort algorithm.
 *
 * Merge sort works by recursively dividing the array into halves, then sorting
 * those halves independently, and finally merging the sorted halves back together
 * in a way that preserves the overall sorted order.
 *
 * Time complexity: O(n log n) in average and worst cases
 * Space complexity: O(n) (due to recursion and temporary arrays)
 *
 * @param arr The array of <T> to be sorted
 * @param compare A function which takes two T arguments, compare them and returns a boolean
 * @returns A new sorted array (does not modify the original one)
 */
export const mergeSort = <T>(arr: T[], compare: (left: T, right: T) => boolean): T[] => {
  if (arr.length <= 1) return arr

  const sort = (array: T[]): T[] => {
    if (array.length <= 1) return array
    const leftSide = array.slice(0, Math.floor(array.length / 2))
    const rightSide = array.slice(Math.floor(array.length / 2))
    return merge(sort(leftSide), sort(rightSide), compare)
  }

  return sort(arr)
}
