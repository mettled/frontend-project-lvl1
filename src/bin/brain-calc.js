#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_CULC, START_GAME, COUNT_QUESTION } from '../constants';
import { gameCulc } from '../games';

console.log(`${START_GAME}`);
console.log(`${DISCRIPTION_CULC}.\n`);

gameStart(COUNT_QUESTION, gameCulc);
