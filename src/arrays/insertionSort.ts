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
