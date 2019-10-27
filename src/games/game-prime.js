import { rundomFunc } from '../helpers';

export default (generatorNumberFunction = rundomFunc) => {
  const number = generatorNumberFunction();
  const sqrt = Math.sqrt(number);
  const iter = (i) => {
    if (number % i === 0) {
      return 'no';
    }
    if (i > sqrt + 1) {
      return 'yes';
    }
    return iter(i + 1);
  };
  const answer = iter(2);
  return {
    question: number,
    answer,
  };
};
