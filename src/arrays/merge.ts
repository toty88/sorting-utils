export const merge = <T>(
  arr1: T[],
  arr2: T[],
  compare: (left: T, right: T) => boolean
): T[] => {
  if (arr1.length === 0 || arr2.length === 0) return []
  let x = 0
  let j = 0
  let finalArr = []
  const leftArr = [...arr1]
  const rightArr = [...arr2]

  while (x < leftArr.length && j < rightArr.length) {
    if (compare(leftArr[x], rightArr[j])) {
      finalArr.push(leftArr[x])
      x++
    } else {
      finalArr.push(rightArr[j])
      j++
    }
  }

  if (x < leftArr.length) {
    finalArr = finalArr.concat(leftArr.splice(x))
  }
  if (j < rightArr.length) {
    finalArr = finalArr.concat(rightArr.splice(j))
  }

  return finalArr
}
