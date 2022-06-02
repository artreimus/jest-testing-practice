import caesarCipher from "./caesarCipher.js";

test("Caesar Cipher: shift char by 3", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz.! ?;:", 3)).toBe(
    "defghijklmnopqrstuvwxyzabc.! ?;:"
  );
});
