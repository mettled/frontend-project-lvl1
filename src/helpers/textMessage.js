import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May i have your name? ');

const askNumber = () => readlineSync.question('Your answer: ');

const greating = () => 'Welcome to the Brain Games!';

const overwriteGmeEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
};

export {
  askName, greating, overwriteGmeEven, askNumber,
};
