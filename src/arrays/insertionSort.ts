export const insertionSort = (arr: number[]): number[] =>
{
  if (arr.length < 2) return arr
  const newArr = [...arr]
  /* [5, 3, 4] */
  //  0, 1, 2
  for (let i = 1; i < newArr.length; i++)
  {
    // current = 3
    const current = newArr[i]
    // j = 0
    let j = i - 1
    // newArr[j] (5) > current (3)
    while (j >= 0 && newArr[j] > current)
    {
      // newArr[1] = 5
      newArr[j + 1] = newArr[j]
      // -1
      j--
    }
    // newArr[-1 + 1 (0)] = 3
    newArr[j + 1] = current
  }
  return newArr
}
