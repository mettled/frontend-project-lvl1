#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_NOD, START_GAME, COUNT_QUESTION } from '../constants';
import { gameGCD } from '../games';

console.log(`${START_GAME}`);
console.log(`${DISCRIPTION_NOD}.\n`);

gameStart(COUNT_QUESTION, gameGCD);
