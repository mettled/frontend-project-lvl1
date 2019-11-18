import rundomFunc from '../helpers/mathFunction';
import gameStart from '..';

const DESCRIPTION_CULC = 'What is the result of the expression?';

const gameCulc = (generatorNumberFunction = rundomFunc) => {
  const number1 = generatorNumberFunction();
  const number2 = generatorNumberFunction();
  const operation = {
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
  switch (true) {
    case (number1 < 33):
      return operation['+'](number1, number2);
    case (number1 > 32 && number1 < 66):
      return operation['-'](number1, number2);
    case (number1 > 65):
      return operation['*'](number1, number2);
    default:
      return {
        question: '',
        answer: 0,
      };
  }
};

export default () => gameStart(gameCulc, DESCRIPTION_CULC);
