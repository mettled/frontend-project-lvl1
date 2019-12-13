import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);
  const iter = (i) => {
    if (number % i === 0) {
      return false;
    }
    if (i > sqrt + 1) {
      return true;
    }
    return iter(i + 1);
  };
  return iter(2);
};

const makeQuestionQuiz = () => {
  const question = rundomGenerate();
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_PRIME);
