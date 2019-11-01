import askQuestion from './helpers/getInfo';
import print from './helpers/sendInfo';

import {
  COUNT_QUESTION, QUESTION, CORRECT_ANSWER, QUESTION_NAME, ANSWER_USER,
  GREATING, WRONG_ANSWER, GAME_OVER_WRONG, GAME_OVER_SUCCESS, START_GAME,
} from './constants';

const askAndCheckQuestion = (numberRounds, func) => {
  const iter = (acc) => {
    if (acc === COUNT_QUESTION) { // check correct count question
      return 'win';
    }
    const round = func();
    print(`${QUESTION}: ${round.question}`);
    const usrAnswer = askQuestion(ANSWER_USER);
    const checkAnswer = round.answer == usrAnswer; // check answer user
    const msg = checkAnswer ? CORRECT_ANSWER
      : `'${usrAnswer}' ${WRONG_ANSWER} '${round.answer}'`;
    print(msg);
    return checkAnswer ? iter(acc + 1, func) : 'lose';
  };
  return iter(0, func);
};

export default (numberRounds, gameFunc, description = '') => {
  print(`${START_GAME}`);
  print(`${description} \n`);

  const nameUser = askQuestion(QUESTION_NAME);
  print(`${GREATING}${nameUser} !\n`);

  if (typeof gameFunc === 'function') {
    const resualtGame = askAndCheckQuestion(numberRounds, gameFunc);
    const resultMessage = resualtGame === 'win' ? `${GAME_OVER_SUCCESS}${nameUser}!`
      : `${GAME_OVER_WRONG}${nameUser}!`;
    print(resultMessage);
  }
};
