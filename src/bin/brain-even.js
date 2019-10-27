#!/usr/bin/env node
import gameStart from '..';
import { START_GAME, DISCRIPTION_EVEN, COUNT_QUESTION } from '../constants';
import { gameEven } from '../games';

console.log(`${START_GAME}`);
console.log(`${DISCRIPTION_EVEN}.\n`);

gameStart(COUNT_QUESTION, gameEven);
