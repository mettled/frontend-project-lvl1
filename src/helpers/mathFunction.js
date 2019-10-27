const rundomFunc = () => Math.floor(Math.random() * 100);

const gcdFunc = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdFunc(b, a % b);
};

export {
  rundomFunc, gcdFunc,
};
