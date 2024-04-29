import { swap } from '@/arrays/swap'

const pivot = <T>(
  arr: T[],
  start: number = 0,
  end: number = arr.length,
  compare: (left: T, right: T) => boolean
): number => {
  const pivot = arr[start]
  let swapIndex = start
  for (let x = start + 1; x <= end; x++) {
    if (compare(arr[x], pivot)) {
      swapIndex++
      if (swapIndex < x) {
        swap(arr, swapIndex, x)
      }
    }
  }
  if (swapIndex > 0) {
    swap(arr, start, swapIndex)
  }
  return swapIndex
}

/**
 * Sorts an array of <T> using the quicksort algorithm.
 *
 * Quicksort works by selecting a pivot element from the array, partitioning the
 * array into two sub-arrays: elements less than the pivot and elements
 * greater than the pivot. Then, it recursively sorts the sub-arrays and finally
 * positions the pivot element in its correct sorted position.
 *
 * Time complexity: O(n log n) on average, O(n^2) in worst case (pivot selection)
 * Space complexity: O(log n) due to recursion (can be optimized with tail recursion)
 *
 * @param arr The array of <T> to be sorted
 * @param compare A function which takes two T arguments, compare them and returns a boolean
 * @param left (optional) The starting index of the sub-array (default: 0)
 * @param right (optional) The ending index of the sub-array (default: arr.length - 1)
 * @returns A new sorted array (does not modify the original array)
 */
export const quickSort = <T>(
  arr: T[],
  compare: (left: T, right: T) => boolean,
  left: number = 0,
  right: number = arr.length - 1
): T[] => {
  if (left < right) {
    const pivotMoves = pivot(arr, left, right, compare)
    if (pivotMoves > 0) {
      quickSort(arr, compare, left, pivotMoves - 1)
      quickSort(arr, compare, pivotMoves + 1, right)
    }
  }
  return arr
}
