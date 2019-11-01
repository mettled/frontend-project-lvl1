#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_CULC, COUNT_QUESTION } from '../constants';
import gameCulc from '../games/game-culc';

gameStart(COUNT_QUESTION, gameCulc, DISCRIPTION_CULC);
