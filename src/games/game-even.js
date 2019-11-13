import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';
import { COUNT_QUESTION } from '../constants';

const DISCRIPTION_EVEN = 'Answer "yes" if the number is even, otherwise answer "no"';
const predicateCheckAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const gameEven = (generatorNumber = rundomFunc) => {
  const number = generatorNumber();
  const correctAnswer = predicateCheckAnswer(number);

  return {
    question: number,
    answer: correctAnswer,
  };
};

export default () => gameStart(COUNT_QUESTION, gameEven, DISCRIPTION_EVEN);
