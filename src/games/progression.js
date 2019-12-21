import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_PROGRESSION = 'What number is missing in the progression?';
const LENGTH_PROGRESSION = 10;

const makeQuestionQuiz = () => {
  const startProgression = rundomGenerate();
  const deltaProgression = rundomGenerate();
  const hiddenProgressionIndex = rundomGenerate(1, LENGTH_PROGRESSION);
  const answer = startProgression + deltaProgression * hiddenProgressionIndex;

  const iter = (acc, countProgression) => {
    if (countProgression > LENGTH_PROGRESSION) {
      return acc;
    }
    const nextMemberProgression = countProgression === hiddenProgressionIndex
      ? '..' : startProgression + deltaProgression * countProgression;
    const newAcc = `${acc} ${nextMemberProgression}`;

    return iter(newAcc, countProgression + 1);
  };

  const question = iter('', 1);

  return {
    question,
    answer: String(answer),
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_PROGRESSION);
