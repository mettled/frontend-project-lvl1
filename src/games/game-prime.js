import rundomGenerate from '../helpers/mathFunction';
import gameStart from '..';

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
  return iter(number);
};

const gamePrime = () => {
  const number = rundomGenerate();
  const answer = isPrime(number) ? 'yes' : 'no';
  return {
    question: number,
    answer,
  };
};

export default () => gameStart(gamePrime, DESCRIPTION_PRIME);
