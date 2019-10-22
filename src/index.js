import readlineSync from 'readline-sync';

const askName = () => {
  const actual = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${actual}!`);
};

export default askName;
