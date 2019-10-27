import { rundomFunc, gcfFunc } from '.';

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

const gameFunctionGCF = (rndFunc = rundomFunc, gcFactorFunc = gcfFunc) => {
  const number1 = rndFunc();
  const number2 = rndFunc();
  const gcf = gcFactorFunc(number1, number2);
  return {
    question: `${number1} ${number2}`,
    answer: gcf,
  };
};

const gameFunctionProgression = (rndFunc = rundomFunc) => {
  const startNumber = rndFunc();
  const diffNumber = Math.ceil(rndFunc() / 10);
  const hiddenNumber = Math.floor(rndFunc() / 10);
  const result = {};
  const iter = (acc, count, nextNumber) => {
    if (count > 9) {
      return acc;
    }
    const locNextNumber = nextNumber + diffNumber;
    const numberProgression = count === hiddenNumber ? '.' : locNextNumber;
    acc.question = `${acc.question} ${numberProgression}`;
    acc.answer = numberProgression === '.' ? locNextNumber : acc.answer;
    return iter(acc, count + 1, locNextNumber);
  };
  result.question = startNumber;
  result.answer = '';
  return iter(result, 1, startNumber);
};

const isPrime = (num = rundomFunc) => {
  const number = num();
  const sqrt = Math.sqrt(number);
  const iter = (i) => {
    if (number % i === 0) {
      return 'no';
    }
    if (i > sqrt + 1) {
      return 'yes';
    }
    return iter(i + 1);
  };
  const ans = iter(2);
  return {
    question: number,
    answer: ans,
  };
};


export {
  gameFunctionEven, gameFunctionCulc, gameFunctionGCF, gameFunctionProgression, isPrime,
};
