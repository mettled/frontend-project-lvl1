#!/usr/bin/env node
import { gameEven } from '..';
import { COUNT_QUESTION } from '../helpers/constants';
import { gameFunctionEven } from '../helpers';

gameEven(COUNT_QUESTION, gameFunctionEven);
