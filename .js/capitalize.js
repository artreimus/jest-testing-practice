// Capitalizes first letter of a string

function capitalize(string) {
  if (string.length === 0) return null;
  if (string.charAt(0) === " ") return "initial string is a space";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");
