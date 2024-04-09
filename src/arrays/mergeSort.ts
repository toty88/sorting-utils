import { merge } from "@/arrays/merge";

/** @see mergeSort O(n log (n)) en el mejor, promedio y peor de los casos */
export const mergeSort = <T>(
  arr: T[],
  compare: (left: T, right: T) => boolean,
): T[] => {
  if (arr.length <= 1) return arr;

  const sort = (array: T[]): T[] => {
    if (array.length <= 1) return array;
    const leftSide = array.slice(0, Math.floor(array.length / 2));
    const rightSide = array.slice(Math.floor(array.length / 2));
    return merge(sort(leftSide), sort(rightSide), compare);
  };

  return sort(arr);
};
