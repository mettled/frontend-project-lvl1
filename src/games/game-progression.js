import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';

const DESCRIPTION_PROG = 'What number is missing in the progression?';
const LENGTH_PROGRESSION = 9;

const gameProgression = (generatorNumber = rundomFunc) => {
  const startNumber = generatorNumber();
  const deltaNumber = generatorNumber(1, 10);
  const hiddenNumber = generatorNumber(1, 10);
  const result = {};

  const iter = (acc, count, nextNumber) => {
    if (count > LENGTH_PROGRESSION) {
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

export default () => gameStart(gameProgression, DESCRIPTION_PROG);
