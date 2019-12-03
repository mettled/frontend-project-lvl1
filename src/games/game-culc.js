import rundomGenerate from '../helpers/mathFunction';
import gameStart from '..';

const DESCRIPTION_CULC = 'What is the result of the expression?';

const gameCulc = () => {
  const number1 = rundomGenerate();
  const number2 = rundomGenerate();
  const operations = {
    '*': (a, b) => ({
      question: `${a} * ${b}`,
      answer: a * b,
    }),
    '+': (a, b) => ({
      question: `${a} + ${b}`,
      answer: a + b,
    }),
    '-': (a, b) => ({
      question: `${a} - ${b}`,
      answer: a - b,
    }),
  };
  const operation = rundomGenerate(0, Object.keys(operations).length - 1);
  return operations[Object.keys(operations)[operation]](number1, number2);
};

export default () => gameStart(gameCulc, DESCRIPTION_CULC);
