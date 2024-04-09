const swap = (arr: number[], index1: number, index2: number): void => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
export const selectionSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  let makeSwap = false;
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[minIndex] > arr[i]) {
      minIndex = i;
      makeSwap = true;
    }
  }
  const newArr = [...arr];
  if (makeSwap) {
    swap(newArr, 0, minIndex);
  }
  return [newArr[0]].concat(selectionSort(newArr.slice(1)));
};
