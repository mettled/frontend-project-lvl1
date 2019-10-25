import readlineSync from 'readline-sync';
import { QUESTION_NAME, ANSWER_USER } from './constants';

const askName = () => readlineSync.question(`${QUESTION_NAME}`);
const askAnswer = () => readlineSync.question(`${ANSWER_USER}`);

export {
  askName, askAnswer,
};
