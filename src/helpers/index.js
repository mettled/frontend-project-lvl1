import {
  greating, overwriteGmeEven, askName, askNumber,
} from './textMessage';
import rundomFunc from './myRandom';
import {
  START_GAME, DISCRIPTION, QUESTION_NAME, GREATING,
  QUESTION, ANSWER_USER, WRONG_ANSWER, CORRECT_ANSWER, GAME_OVER,
} from './constants';

const gameEven = (numberRounds, rndFunc) => {
  const iter = (acc, number) => {
    if (acc === 3) {
      return GAME_OVER;
    }
    const actualNumber = number();
    const correctAnswer = actualNumber % 2 === 0 ? 'yes' : 'no';
    console.log(actualNumber);
    const askAnswer = askNumber();
    if (correctAnswer === askAnswer) {
      console.log(CORRECT_ANSWER);
    }
    return correctAnswer === askAnswer ? iter(acc + 1, number) : WRONG_ANSWER;
  };
  return iter(numberRounds, rndFunc);
};

console.log('Test', gameEven(0, rundomFunc));

export {
  greating, overwriteGmeEven, askName, askNumber,
};
