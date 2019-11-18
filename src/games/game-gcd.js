import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';

const DESCRIPTION_NOD = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gameGCD = (generatorNumberFunc = rundomFunc, gcdFunction = gcd) => {
  const number1 = generatorNumberFunc();
  const number2 = generatorNumberFunc();
  const gcdResult = gcdFunction(number1, number2);

  return {
    question: `${number1} ${number2}`,
    answer: gcdResult,
  };
};

export default () => gameStart(gameGCD, DESCRIPTION_NOD);
