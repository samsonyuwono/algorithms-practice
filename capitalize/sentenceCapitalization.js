function capitalize(str) {
  let wordArr = str.split(" ");
  let resultArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    // console.log("first letter", wordArr[i].charAt(0).toUpperCase());
    // console.log(wordArr[i].slice(1));
    resultArr.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1));
  }
  console.log(resultArr.join(" "));
  return resultArr.join(" ");
}

//input is string of words
//output all words in string with capitalized first letter
//split word into array
//loop through array and grab each word element's first character to capitalize it then join it back with other words

module.exports = capitalize;
