export const swap = <T>(arr: T[], index1: number, index2: number): T[] => {
  if (arr.length > 1 && index1 !== index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  return arr;
};
