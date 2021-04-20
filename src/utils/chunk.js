export default (arr, chunkSize) => {
  return arr.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize)

    if (!result[chunkIndex]) result[chunkIndex] = []

    result[chunkIndex].push(item)

    return result
  }, [])
}
