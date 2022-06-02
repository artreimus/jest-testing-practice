import reverseString from "./reverseString.js";

test("Reverse the string", () => {
  expect(reverseString("hi there")).toBe("ereht ih");
});

test("Empty input", () => {
  expect(reverseString("")).toBeNull();
});
