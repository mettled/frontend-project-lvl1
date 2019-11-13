import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';
import { COUNT_QUESTION } from '../constants';

const DISCRIPTION_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = (generatorNumberFunction = rundomFunc) => {
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

export default () => gameStart(COUNT_QUESTION, gamePrime, DISCRIPTION_PRIME);
