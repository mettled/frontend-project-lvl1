import { rundomFunc } from '../helpers/mathFunction';

export default (generatorNumberFunction = rundomFunc) => {
  const number1 = generatorNumberFunction();
  const number2 = generatorNumberFunction();
  const result = {};
  if (number1 < 33) {
    result.question = `${number1} + ${number2}`;
    result.answer = number1 + number2;
  }
  if (number1 > 32 && number1 < 66) {
    result.question = `${number1} - ${number2}`;
    result.answer = number1 - number2;
  }
  if (number1 > 65) {
    result.question = `${number1} * ${number2}`;
    result.answer = number1 * number2;
  }
  return result;
};
