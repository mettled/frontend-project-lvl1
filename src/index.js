import readlineSync from 'readline-sync';

import {
  QUESTION, CORRECT_ANSWER,
  GREATING, WRONG_ANSWER, GAME_OVER_WRONG, GAME_OVER_SUCCESS,
  ANSWER_USER, QUESTION_NAME,
} from './constants';

const START_GAME_PHRASE = 'Welcome to the Brain Games!';
const COUNT_QUESTION = 3;

const askAndCheckQuestion = (endGamesRounds, func) => {
  const iter = (count) => {
    if (count === endGamesRounds) { // check correct count question
      return 'win';
    }
    const round = func();
    console.log(`${QUESTION}: ${round.question}`);
    const usrAnswer = readlineSync.question(`${ANSWER_USER}`);
    const checkAnswer = String(round.answer) === String(usrAnswer); // check answer user
    const msg = checkAnswer ? CORRECT_ANSWER
      : `'${usrAnswer}' ${WRONG_ANSWER} '${round.answer}'`;
    console.log(msg);
    return checkAnswer ? iter(count + 1, func) : 'lose';
  };
  return iter(0);
};

export default (gameFunc, gameDescription = '') => {
  console.log(`${START_GAME_PHRASE}`);
  console.log(`${gameDescription}.\n`);
  const nameUser = readlineSync.question(`${QUESTION_NAME}`);
  console.log(`${GREATING}${nameUser} !\n`);

  if (typeof gameFunc === 'function') {
    const resualtGame = askAndCheckQuestion(COUNT_QUESTION, gameFunc);
    const resultMessage = resualtGame === 'win' ? `${GAME_OVER_SUCCESS}${nameUser}!`
      : `${GAME_OVER_WRONG}${nameUser}!`;
    console.log(resultMessage);
  }
};
