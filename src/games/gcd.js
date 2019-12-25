import rundomGenerate from '../helpers/mathFunction';
import runGame from '..';

const DESCRIPTION_GCD = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const makeQuiz = () => {
  const number1 = rundomGenerate();
  const number2 = rundomGenerate();
  const answer = gcd(number1, number2);

  return {
    question: `${number1} ${number2}`,
    answer: String(answer),
  };
};

export default () => runGame(makeQuiz, DESCRIPTION_GCD);
