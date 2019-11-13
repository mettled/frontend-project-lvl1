export default (min = 0, max = 100) => (
  Math.floor(Math.floor(min + Math.random() * (max + 1 - min)))
);
