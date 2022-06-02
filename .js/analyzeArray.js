const analyzeArray = (array) => {
  if (array.length === 0) return null;
  if (!validateArray(array)) return "invalid array";
  const min = array.reduce((a, b) => {
    return b < a ? b : a;
  });
  const max = array.reduce((a, b) => {
    return b > a ? b : a;
  });
  const length = array.length;
  const average = array.reduce((a, b) => a + b) / length;

  return {
    min,
    max,
    length,
    average,
  };
};

const validateArray = (array) => {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== "number") {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

export default analyzeArray;
