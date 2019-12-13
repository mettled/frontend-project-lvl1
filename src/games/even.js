import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_EVEN = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => (number % 2 === 0);

const makeQuestionQuiz = () => {
  const question = rundomGenerate();
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_EVEN);
