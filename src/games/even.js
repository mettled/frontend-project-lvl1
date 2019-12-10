import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_EVEN = 'Answer "yes" if the number is even, otherwise answer "no"';
const isCorrectAnswer = (number) => (number % 2 === 0);

const makeQuestionQuiz = () => {
  const question = rundomGenerate();
  const correctAnswer = isCorrectAnswer(question) ? 'yes' : 'no';

  return {
    question,
    answer: correctAnswer,
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_EVEN);
