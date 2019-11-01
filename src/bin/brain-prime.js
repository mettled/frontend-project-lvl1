#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_PRIME, COUNT_QUESTION } from '../constants';
import gamePrime from '../games/game-prime';

gameStart(COUNT_QUESTION, gamePrime, DISCRIPTION_PRIME);
