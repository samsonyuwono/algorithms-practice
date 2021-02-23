// //two inputs- partially sorted array [3,4,5,6,7,1,2] and element to find in array 2
// //output is index of element in array or -1 one if it doesn't exist

// // loop through input array
//   // if array element is equal to the second input element then return index of array el
//   // else return -1

// //So the O(N) solution won’t help we need O(log(n)) solution .
// // Hint 1 : Binary Search .

// //start with the middle
// //if less than value search left
// //if more than value

// //initialize a variable start index of 0
// //intialize a variable end which will be index.length
// //
// // 0   2   4
// // a b c d e
// //while start is less than end
//   //initialize mid = Math.floor((start+end)/2)

//   //if middle element equals target return mid;

//   //if middle is less than target then we will search left

//   //if middle is more than target we'll search right

//   //return -1

//   // [3,4,5,6,7,1,2]
function searchTargetArray(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[start] < arr[mid]) {
      if (target >= arr[start] && target <= arr[mid]) {
        end = mid;
        console.log(47);
      } else {
        start = mid;
      }
    } else {
      if (target >= arr[start] || target <= arr[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    }
  }
  return -1;
}

console.log(searchTargetArray([3, 4, 5, 6, 7, 1, 2], 5));
