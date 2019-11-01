import { rundomFunc } from '../helpers/mathFunction';

export default (generatorNumberFunction = rundomFunc) => {
  const number = generatorNumberFunction();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return {
    question: number,
    answer: correctAnswer,
  };
};
