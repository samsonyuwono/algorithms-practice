var reverse = function (x) {
  if (x === 0) {
    return 0;
  }

  let reverseArr = [];
  let xArr = x.toString().split("");

  for (i = xArr.length - 1; i >= 0; i--) {
    if (xArr[i] === "-") {
      reverseArr.unshift("-");
    }
    reverseArr.push(xArr[i]);
  }

  return parseInt(reverseArr.join(""));
};

module.exports = reverse;

//input is a number
//return number but in reverse order
//create empty array variable to store reverse number called reverseArr
//split up input
//loop through input backwards
//if number element is 0 then remove it
//push numbers into empty array
//return reverseArr.join('')
