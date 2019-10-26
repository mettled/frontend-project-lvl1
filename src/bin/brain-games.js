#!/usr/bin/env node
import { askName } from '../helpers';
import { START_GAME, GREATING } from '../constants';

console.log(`${START_GAME}`);
const nameUser = askName();
console.log(`${GREATING}${nameUser} !\n`);
