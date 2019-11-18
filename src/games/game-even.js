import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';

const DESCRIPTION_EVEN = 'Answer "yes" if the number is even, otherwise answer "no"';
const predicateCheckAnswer = (number) => (number % 2 === 0);

const gameEven = (generatorNumber = rundomFunc) => {
  const questionNumber = generatorNumber();
  const correctAnswer = predicateCheckAnswer(questionNumber) ? 'yes' : 'no';


  return {
    question: questionNumber,
    answer: correctAnswer,
  };
};

export default () => gameStart(gameEven, DESCRIPTION_EVEN);
