import {
  addition,
  subtraction,
  multiplication,
  division,
} from "./calculator.js";

test("1 + 2 to equal 3", () => {
  expect(addition(1, 2)).toBe(3);
});

test("2 - 2 to equal 0", () => {
  expect(subtraction(2, 2)).toBe(0);
});

test("3 * 5 to equal 15", () => {
  expect(multiplication(3, 5)).toBe(15);
});

test("10 / 0 to be Null", () => {
  expect(division(10, 0)).toBeNull();
});

test("0 / 10 to equal 0", () => {
  expect(division(0, 10)).toEqual(0);
});

test("10 / 5 to equal 2", () => {
  expect(division(10, 5)).toEqual(2);
});
