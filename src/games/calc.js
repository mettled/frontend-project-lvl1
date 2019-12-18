import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_CALC = 'What is the result of the expression?';
const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const signs = Object.keys(operations);
const getOperation = (operation) => operations[signs[operation]];
const getSign = (sign) => signs[sign];

const makeQuestionQuiz = () => {
  const number1 = rundomGenerate();
  const number2 = rundomGenerate();
  const operation = rundomGenerate(0, signs.length - 1);

  return {
    question: `${number1} ${getSign(operation)} ${number2}`,
    answer: getOperation(operation)(number1, number2),
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_CALC);
