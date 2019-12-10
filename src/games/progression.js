import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_PROGRESSION = 'What number is missing in the progression?';
const LENGTH_PROGRESSION = 10;

const makeQuestionQuiz = () => {
  const start = rundomGenerate();
  const delta = rundomGenerate(1, LENGTH_PROGRESSION);
  const hidden = rundomGenerate(1, LENGTH_PROGRESSION);
  const result = {};

  const iter = (acc, countProgression) => {
    if (countProgression >= LENGTH_PROGRESSION) {
      acc.answer = start + delta * hidden;
      return acc;
    }
    const nextNumberProgression = countProgression === hidden ? '..' : start + delta * countProgression;
    acc.question = `${acc.question} ${nextNumberProgression}`;
    return iter(acc, countProgression + 1);
  };

  result.question = start;
  result.answer = '';
  return iter(result, 1);
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_PROGRESSION);
