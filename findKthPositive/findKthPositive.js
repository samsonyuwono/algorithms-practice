var findKthPositive = function (arr, k) {
  let missingNumbers = [];

  for (let i = 1; i < arr[arr.length - 1]; i++) {
    //.indexOf returns the position of the elmeent not the element
    if (arr.indexOf(i) === -1) {
      missingNumbers.push(i);
    }
    //if missing numbers is empty then push k length numbers into missing numbers
    else if (missingNumbers.length < k) {
      missingNumbers.push(arr[arr.length - 1] + i);
    }
  }

  missingNumbers.sort(function (a, b) {
    return a - b;
  });
  console.log("missingNumnbers", missingNumbers);
  return missingNumbers[k - 1];
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
