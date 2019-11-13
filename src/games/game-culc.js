import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';
import { COUNT_QUESTION } from '../constants';

const DISCRIPTION_CULC = 'What is the result of the expression?';

const gameCulc = (generatorNumberFunction = rundomFunc) => {
  const number1 = generatorNumberFunction();
  const number2 = generatorNumberFunction();
  const result = {};

  switch (number1) {
    case (number1 < 33):
      result.question = `${number1} + ${number2}`;
      result.answer = number1 + number2;
      break;
    case (number1 > 32 && number1 < 66):
      result.question = `${number1} - ${number2}`;
      result.answer = number1 - number2;
      break;
    case (number1 > 65):
      result.question = `${number1} * ${number2}`;
      result.answer = number1 * number2;
      break;
    default:
      result.question = '';
      result.answer = 0;
  }
  return result;
};

export default () => gameStart(COUNT_QUESTION, gameCulc, DISCRIPTION_CULC);
