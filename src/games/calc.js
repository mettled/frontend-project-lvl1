import rundomGenerate from '../helpers/mathFunction';
import makeQuiz from '..';

const DESCRIPTION_CULC = 'What is the result of the expression?';
const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const makeQuestionQuiz = () => {
  const number1 = rundomGenerate();
  const number2 = rundomGenerate();
  const operation = rundomGenerate(0, Object.keys(operations).length - 1);

  return {
    question: `${number1} ${Object.keys(operations)[operation]} ${number2}`,
    answer: operations[Object.keys(operations)[operation]](number1, number2),
  };
};

export default () => makeQuiz(makeQuestionQuiz, DESCRIPTION_CULC);
