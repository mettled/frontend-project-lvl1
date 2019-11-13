import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';
import { COUNT_QUESTION } from '../constants';

const DISCRIPTION_PROG = 'What number is missing in the progression?';

const gameProgression = (generatorNumberFunction = rundomFunc) => {
  const startNumber = generatorNumberFunction();
  const deltaNumber = Math.ceil(generatorNumberFunction() / 10);
  const hiddenNumber = Math.floor(generatorNumberFunction() / 10);
  const result = {};

  const iter = (acc, count, nextNumber) => {
    if (count > 9) {
      return acc;
    }
    const locNextNumber = nextNumber + deltaNumber;
    const numberProgression = count === hiddenNumber ? '.' : locNextNumber;
    acc.question = `${acc.question} ${numberProgression}`;
    acc.answer = numberProgression === '.' ? locNextNumber : acc.answer;
    return iter(acc, count + 1, locNextNumber);
  };

  result.question = startNumber;
  result.answer = '';
  return iter(result, 1, startNumber);
};

export default () => gameStart(COUNT_QUESTION, gameProgression, DISCRIPTION_PROG);
