import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_CALC = 'What is the result of the expression?';
const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const makeQuestionQuiz = () => {
  const number1 = rundomGenerate();
  const keysOperations = Object.keys(operations);
  const number2 = rundomGenerate();
  const operation = rundomGenerate(0, keysOperations.length - 1);

  return {
    question: `${number1} ${keysOperations[operation]} ${number2}`,
    answer: operations[keysOperations[operation]](number1, number2),
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_CALC);
