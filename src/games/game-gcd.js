import { rundomFunc, gcdFunc } from '../helpers';

export default (generatorNumberFunc = rundomFunc, gcdFunction = gcdFunc) => {
  const number1 = generatorNumberFunc();
  const number2 = generatorNumberFunc();
  const gcd = gcdFunction(number1, number2);

  return {
    question: `${number1} ${number2}`,
    answer: gcd,
  };
};
