import { swap } from "@/arrays/swap";

const pivot = <T>(
  arr: T[],
  start: number = 0,
  end: number = arr.length,
  compare: (left: T, right: T) => boolean,
): number => {
  const pivot = arr[start];
  let swapIndex = start;
  for (let x = start + 1; x <= end; x++) {
    if (compare(arr[x], pivot)) {
      swapIndex++;
      if (swapIndex < x) {
        swap(arr, swapIndex, x);
      }
    }
  }
  if (swapIndex > 0) {
    swap(arr, start, swapIndex);
  }
  return swapIndex;
};

export const quickSort = <T>(
  arr: T[],
  compare: (left: T, right: T) => boolean,
  left: number = 0,
  right: number = arr.length - 1,
): T[] => {
  if (left < right) {
    const pivotMoves = pivot(arr, left, right, compare);
    if (pivotMoves > 0) {
      quickSort(arr, compare, left, pivotMoves - 1);
      quickSort(arr, compare, pivotMoves + 1, right);
    }
  }
  return arr;
};
