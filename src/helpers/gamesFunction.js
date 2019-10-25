import rundomFunc from './myRandom';

const gameFunctionEven = (rndFunc = rundomFunc) => {
  const actualNumber = rndFunc();
  const correctAnswer = actualNumber % 2 === 0 ? 'yes' : 'no';
  return {
    question: actualNumber,
    answer: correctAnswer,
  };
};

const gameFunctionCulc = (rndFunc = rundomFunc) => {
  const number1 = rndFunc();
  const number2 = rndFunc();
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

export {
  gameFunctionEven, gameFunctionCulc,
};
