import readlineSync from 'readline-sync';

import CONSTANTS from './constants';

const START_GAME_PHRASE = 'Welcome to the Brain Games!';
const END_ROUNDS_COUNT = 3;

const makeQuiz = (endRoundsCount, questionQuiz) => {
  const iter = (currentRoundsCount) => {
    if (currentRoundsCount === endRoundsCount) {
      return 'win';
    }
    const round = questionQuiz();
    console.log(`${CONSTANTS.QUESTION}: ${round.question}`);
    const userAnswer = readlineSync.question(`${CONSTANTS.ANSWER_USER}`);
    const checkAnswer = String(round.answer) === String(userAnswer);
    const msg = checkAnswer ? CONSTANTS.CORRECT_ANSWER
      : `'${userAnswer}' ${CONSTANTS.WRONG_ANSWER} '${round.answer}'`;
    console.log(msg);
    return checkAnswer ? iter(currentRoundsCount + 1) : 'lose';
  };
  return iter(0);
};

const runGame = (gameFunc, gameDescription = '') => {
  console.log(`${START_GAME_PHRASE}`);
  console.log(`${gameDescription}.\n`);
  const nameUser = readlineSync.question(`${CONSTANTS.QUESTION_NAME}`);
  console.log(`${CONSTANTS.GREATING}${nameUser}!\n`);

  if (typeof gameFunc === 'function') {
    const resultGame = makeQuiz(END_ROUNDS_COUNT, gameFunc);
    const resultMessage = resultGame === 'win' ? `${CONSTANTS.GAME_OVER_SUCCESS}${nameUser}!`
      : `${CONSTANTS.GAME_OVER_WRONG}${nameUser}!`;
    console.log(resultMessage);
  }
};

export default runGame;
