import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_PROGRESSION = 'What number is missing in the progression?';
const LENGTH_PROGRESSION = 10;

const makeQuestionQuiz = () => {
  const startProgression = rundomGenerate();
  const deltaProgression = rundomGenerate();
  const hiddenMember = rundomGenerate(1, LENGTH_PROGRESSION);
  const result = {};

  const iter = ({ ...acc }, countProgression) => {
    if (countProgression >= LENGTH_PROGRESSION) {
      acc.answer = startProgression + deltaProgression * hiddenMember;
      return acc;
    }
    const nextNumberProgression = countProgression === hiddenMember
      ? '..' : startProgression + deltaProgression * countProgression;
    acc.question = `${acc.question} ${nextNumberProgression}`;
    return iter(acc, countProgression + 1);
  };

  return iter(result, 1);
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_PROGRESSION);
