import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';

const DESCRIPTION_CULC = 'What is the result of the expression?';

const gameCulc = (generatorNumber = rundomFunc) => {
  const number1 = generatorNumber();
  const number2 = generatorNumber();
  const operations = {
    1: (a, b) => ({
      question: `${a} * ${b}`,
      answer: a * b,
    }),
    2: (a, b) => ({
      question: `${a} + ${b}`,
      answer: a + b,
    }),
    3: (a, b) => ({
      question: `${a} - ${b}`,
      answer: a - b,
    }),
  };
  const operation = generatorNumber(1, 3);
  return operations[operation](number1, number2);
};

export default () => gameStart(gameCulc, DESCRIPTION_CULC);
