import {
  askName, askNumber, rundomFunc,
} from './helpers';

import {
  START_GAME, DISCRIPTION, COUNT_QUESTION, QUESTION, CORRECT_ANSWER,
  GREATING, WRONG_ANSWER, GAME_OVER_WRONG, GAME_OVER_SUCCESS,
} from './helpers/constants';

const askAndCheckQuestion = (numberRounds, rndFunc) => {
  const iter = (acc, number) => {
    if (acc === COUNT_QUESTION) { // check correct count question
      return 'win';
    }
    const actualNumber = number();
    const correctAnswer = actualNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`${QUESTION}: ${actualNumber}`);

    const askAnswer = askNumber();
    const checkAnswer = correctAnswer === askAnswer; // check answer user
    if (checkAnswer) {
      console.log(CORRECT_ANSWER);
    }
    return checkAnswer ? iter(acc + 1, number) : askAnswer;
  };
  return iter(0, rndFunc);
};

const gameEven = (numberRouds = COUNT_QUESTION, rfunc = rundomFunc) => {
  console.log(`${START_GAME}`);
  console.log(`${DISCRIPTION}.\n`);
  const nameUser = askName();
  console.log(`${GREATING}${nameUser} !\n`);
  const resualtGame = askAndCheckQuestion(numberRouds, rfunc);
  if (resualtGame === 'yes') {
    console.log(`'yes' ${WRONG_ANSWER} 'no'`);
  }
  if (resualtGame === 'no') {
    console.log(`'no' ${WRONG_ANSWER} 'yes'`);
  }
  const resultMessage = resualtGame === 'win' ? `${GAME_OVER_SUCCESS}${nameUser}!`
    : `${GAME_OVER_WRONG}${nameUser}!`;
  console.log(resultMessage);
};

export {
  gameEven,
};
