import readlineSync from 'readline-sync';

import CONSTANTS from './constants';

const START_GAME_PHRASE = 'Welcome to the Brain Games!';
const ROUNDS_COUNT = 3;

const runQuiz = (endRoundsCount, questionQuiz) => {
  const iter = (currentRoundsCount) => {
    if (currentRoundsCount === endRoundsCount) {
      return true;
    }
    const round = questionQuiz();
    console.log(`${CONSTANTS.QUESTION}: ${round.question}`);
    const userAnswer = readlineSync.question(`${CONSTANTS.ANSWER_USER}`);
    console.log(typeof round.answer);
    const checkAnswer = round.answer === userAnswer;
    const msg = checkAnswer ? CONSTANTS.CORRECT_ANSWER
      : `'${userAnswer}' ${CONSTANTS.WRONG_ANSWER} '${round.answer}'`;
    console.log(msg);
    return checkAnswer ? iter(currentRoundsCount + 1) : false;
  };
  return iter(0);
};

const runGame = (getGame, gameDescription = '') => {
  console.log(`${START_GAME_PHRASE}`);
  console.log(`${gameDescription}.\n`);
  const nameUser = readlineSync.question(`${CONSTANTS.QUESTION_NAME}`);
  console.log(`${CONSTANTS.GREATING}${nameUser}!\n`);

  const resultGame = runQuiz(ROUNDS_COUNT, getGame);
  const resultMessage = resultGame ? `${CONSTANTS.GAME_OVER_SUCCESS}${nameUser}!`
    : `${CONSTANTS.GAME_OVER_WRONG}${nameUser}!`;
  console.log(resultMessage);
};

export default runGame;
