function reverseString(string) {
  if (string.length === 0) return null;
  return string.split("").reverse().join("");
}

export default reverseString;
