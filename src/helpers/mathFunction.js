const rundomFunc = () => Math.floor(Math.random() * 100);

const gcfFunc = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcfFunc(b, a % b);
};

export {
  rundomFunc, gcfFunc,
};
