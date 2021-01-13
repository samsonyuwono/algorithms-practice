const validAnagrams = require("./validAnagram");

test("valid anagram is a function", () => {
  expect(typeof validAnagrams).toEqual("function");
});

test('"hello" is an anagram of "llohe"', () => {
  expect(validAnagrams("hello", "llohe")).toBeTruthy();
});

test('"anagram" is an anagram of "nagaram"', () => {
  expect(validAnagrams("anagram", "nagaram")).toBeTruthy();
});

test('"rat" is not an anagram of "car"', () => {
  expect(validAnagrams("rat", "car")).toBeFalsy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(validAnagrams("One One", "Two two two")).toBeFalsy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(validAnagrams("One One", "Two two two")).toBeFalsy();
});
test('"a" is not an anagram of "ab"', () => {
  expect(validAnagrams("a", "ab")).toBeFalsy();
});
