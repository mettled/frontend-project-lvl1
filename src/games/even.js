import rundomGenerate from '../helpers/mathFunction';
import runGame from '..';

const DESCRIPTION_EVEN = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => (number % 2 === 0);

const makeQuiz = () => {
  const question = rundomGenerate();
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => runGame(makeQuiz, DESCRIPTION_EVEN);
