const findKthPositive = require("./findKthPositive");

test("findKthPositive is a function", () => {
  expect(typeof findKthPositive).toEqual("function");
});

// test("The 5th missing positive integer in this array is 9", () => {
//   expect(findKthPositive([2, 3, 4, 7, 11], 5)).toEqual(9);
// });

// test("The 2nd missing positive integer in this array is 6", () => {
//   expect(findKthPositive([1, 2, 3, 4], 2)).toEqual(6);
// });

test("The 2nd missing positive integer in this array is 6", () => {
  expect(findKthPositive([1], 1)).toEqual(2);
});
