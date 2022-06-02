const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => {
  return b === 0 ? null : a / b;
};

export { addition, subtraction, multiplication, division };
