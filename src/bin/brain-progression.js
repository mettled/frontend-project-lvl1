#!/usr/bin/env node
import { gameStart } from '..';
import { DISCRIPTION_PROG, START_GAME, COUNT_QUESTION } from '../constants';
import { gameFunctionProgression } from '../helpers';

console.log(`${START_GAME}`);
console.log(`${DISCRIPTION_PROG}.\n`);

gameStart(COUNT_QUESTION, gameFunctionProgression);