import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_NOD = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const makeQuestionQuiz = () => {
  const number1 = rundomGenerate();
  const number2 = rundomGenerate();
  const gcdResult = gcd(number1, number2);

  return {
    question: `${number1} ${number2}`,
    answer: gcdResult,
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_NOD);
