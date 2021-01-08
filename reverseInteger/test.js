const reverse = require("./reverseInteger");

test("Capitalize is a function", () => {
  expect(typeof reverse).toEqual("function");
});

test("reverse 123", () => {
  expect(reverse(123)).toEqual(321);
});

test("reverse -123", () => {
  expect(reverse(-123)).toEqual(-321);
});

test("reverse 120", () => {
  expect(reverse(120)).toEqual(21);
});

test("reverse 0", () => {
  expect(reverse(0)).toEqual(0);
});
