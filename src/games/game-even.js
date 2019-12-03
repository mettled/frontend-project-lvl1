import rundomGenerate from '../helpers/mathFunction';
import gameStart from '..';

const DESCRIPTION_EVEN = 'Answer "yes" if the number is even, otherwise answer "no"';
const isCorrectAnswer = (number) => (number % 2 === 0);

const gameEven = () => {
  const question = rundomGenerate();
  const correctAnswer = isCorrectAnswer(question) ? 'yes' : 'no';


  return {
    question,
    answer: correctAnswer,
  };
};

export default () => gameStart(gameEven, DESCRIPTION_EVEN);
