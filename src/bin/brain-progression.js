#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_PROG, COUNT_QUESTION } from '../constants';
import gameProgression from '../games/game-progression';

gameStart(COUNT_QUESTION, gameProgression, DISCRIPTION_PROG);
