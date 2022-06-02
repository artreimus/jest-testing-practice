import capitalize from "./capitalize";

test("First letter of string is Capitalized", () => {
  expect(capitalize("lorem ipsum")).toBe("Lorem ipsum");
});

test("Empty input", () => {
  expect(capitalize("")).toBeNull();
});

test("First character in string is a space", () => {
  expect(capitalize(" hello")).toBe("initial string is a space");
});
