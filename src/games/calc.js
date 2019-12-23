import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_CALC = 'What is the result of the expression?';
const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const signs = Object.keys(operations);
const getOperation = (collection, operator) => collection[Object.keys(collection)[operator]];
const getSign = (collection, operator) => Object.keys(collection)[operator];

const makeQuestionQuiz = () => {
  const number1 = rundomGenerate();
  const number2 = rundomGenerate();
  const operator = rundomGenerate(0, signs.length - 1);

  return {
    question: `${number1} ${getSign(operations, operator)} ${number2}`,
    answer: String(getOperation(operations, operator)(number1, number2)),
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_CALC);
