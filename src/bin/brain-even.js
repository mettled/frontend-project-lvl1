#!/usr/bin/env node
import gameStart from '..';
import { DISCRIPTION_EVEN, COUNT_QUESTION } from '../constants';
import gameEven from '../games/game-even';

gameStart(COUNT_QUESTION, gameEven, DISCRIPTION_EVEN);
