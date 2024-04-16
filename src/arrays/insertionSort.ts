/**
 * Sorts an array of numbers using the insertion sort algorithm.
 *
 * Insertion sort works by iterating through the unsorted portion of the array,
 * picking the next element, and inserting it into its correct position within the
 * sorted part of the array.
 *
 * Time complexity: O(n^2) in the average/worst case, O(n) in the best case (already sorted)
 * Space complexity: O(1)
 *
 * @param arr The array of numbers to be sorted
 * @returns A new sorted array (does not modify the original array)
 */
export const insertionSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr
  const newArr = [...arr]
  for (let i = 1; i < newArr.length; i++) {
    const current = newArr[i]
    let j = i - 1
    while (j >= 0 && newArr[j] > current) {
      newArr[j + 1] = newArr[j]
      j--
    }
    newArr[j + 1] = current
  }
  return newArr
}
