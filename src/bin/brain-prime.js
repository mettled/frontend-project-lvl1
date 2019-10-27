#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_PRIME, START_GAME, COUNT_QUESTION } from '../constants';
import { gamePrime } from '../games';

console.log(`${START_GAME}`);
console.log(`${DISCRIPTION_PRIME}.\n`);

gameStart(COUNT_QUESTION, gamePrime);
