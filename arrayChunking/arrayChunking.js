function chunk(arr, size) {
  const chunkArr = [];
  let index = 0;

  while (index < arr.length) {
    chunkArr.push(arr.slice(index, index + size));
    // console.log(arr.slice(index, index + size));
    index += size;
  }
  return chunkArr;
}

//first input is an array
//second input is the number for each array chunk length
//create an empty result array
//set index to 0 to use in while loop comparing to array.length
//slice arr starting from index to index plus size then push it to chunkArr (slice doesn't get last element of array)
// add size to index to move within chunkArr
//return chunkArr

module.exports = chunk;
