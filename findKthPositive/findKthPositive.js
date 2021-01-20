var findKthPositive = function (arr, k) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    //if elelement minus index - 1 is larger or equal to k
    //add index and k then return the result
    if (arr[i] - i - 1 >= k) {
      res = i + k;
      return res;
    }
  }
  //return if array doesn't have missing numbers and needs to count up to k
  return arr.length + k;
};

module.exports = findKthPositive;

//two inputs. arr is array of positive integers in increasing order and k is a positive integer
//return the missing number number that is k element in an array of missing numbers
//create an empty array that will take missing numbers

//loop through arr from 1 to the last element of arr,
//if index of element can't be found in array push it into missingNumbers
//
//concat both arr and missing numbers then sort
//return  missing indexOf(k-1)
