#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_NOD, COUNT_QUESTION } from '../constants';
import gameGCD from '../games/game-gcd';

gameStart(COUNT_QUESTION, gameGCD, DISCRIPTION_NOD);
