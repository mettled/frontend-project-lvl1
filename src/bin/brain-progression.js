#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_PROG, START_GAME, COUNT_QUESTION } from '../constants';
import { gameProgression } from '../games';

console.log(`${START_GAME}`);
console.log(`${DISCRIPTION_PROG}.\n`);

gameStart(COUNT_QUESTION, gameProgression);
