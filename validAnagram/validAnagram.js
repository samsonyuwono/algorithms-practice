var createCharMap = function (str) {
  let charMap = {};
  for (let char of str.replace(/\s+/g, "").toLowerCase()) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
};

var validAnagrams = function (s, t) {
  //   const aCharMap = createCharMap(s);
  //   const bCharMap = createCharMap(t);

  let aCharMap = {};
  let bCharMap = {};

  for (let char of s.replace(/\s+/g, "").toLowerCase()) {
    aCharMap[char] ? aCharMap[char]++ : (aCharMap[char] = 1);
  }

  for (let char of t.replace(/\s+/g, "").toLowerCase()) {
    bCharMap[char] ? bCharMap[char]++ : (bCharMap[char] = 1);
  }
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let k in aCharMap) {
    if (aCharMap[k] !== bCharMap[k]) {
      return false;
    }
  }
  return true;
};

//needs to be refactored
//a does not equal ab - solve this edge case

module.exports = validAnagrams;

//has two inputs of strings
//return boolean based on if two inputs are anagarams of each other
//get rid of spaces and lower case all characters in string input stirng inputs
//create two empty objects to hold character map for s and t
//use createCharMap function to create charMaps for two inputs
//loop through a charMap
//if it's value is not equal to bCharMap then return false
//else returns true
//loop over both character maps to ascertain values
