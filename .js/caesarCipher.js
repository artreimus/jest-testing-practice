//ascii of a to z is from 96 to 122

const caesarCipher = (string, shift) => {
  let cipherArray = [];
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (code > 95 && code < 123) code += shift;
    while (code > 122) {
      code = code - 122 + 96;
    }
    cipherArray.push(String.fromCharCode(code));
  }
  return cipherArray.join("");
};

export default caesarCipher;
