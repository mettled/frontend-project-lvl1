import {
  askName, askAnswer,
} from './helpers';

import {
  START_GAME, DISCRIPTION, COUNT_QUESTION, QUESTION, CORRECT_ANSWER,
  GREATING, WRONG_ANSWER, GAME_OVER_WRONG, GAME_OVER_SUCCESS,
} from './helpers/constants';

const askAndCheckQuestion = (numberRounds, func) => {
  const iter = (acc, number) => {
    if (acc === COUNT_QUESTION) { // check correct count question
      return 'win';
    }
    const round = func();
    console.log(`${QUESTION}: ${round.question}`);
    const usrAnswer = askAnswer();
    const checkAnswer = round.answer == usrAnswer; // check answer user
    const msg = checkAnswer ? CORRECT_ANSWER
      : `'${usrAnswer}' ${WRONG_ANSWER} '${round.answer}'`;
    console.log(msg);
    return checkAnswer ? iter(acc + 1, func) : 'lose' ;
  };
  return iter(0, func);
};

const gameEven = (numberRounds, gameFunc) => {
  console.log(`${START_GAME}`);
  console.log(`${DISCRIPTION}.\n`);
  const nameUser = askName();
  console.log(`${GREATING}${nameUser} !\n`);
  const resualtGame = askAndCheckQuestion(numberRounds, gameFunc);
  const resultMessage = resualtGame === 'win' ? `${GAME_OVER_SUCCESS}${nameUser}!`
    : `${GAME_OVER_WRONG}${nameUser}!`;
  console.log(resultMessage);
};

export {
  gameEven,
};
