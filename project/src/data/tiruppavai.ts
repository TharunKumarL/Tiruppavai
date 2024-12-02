import { TiruppavaiDay } from '../types';
import { day1 } from './verses/day1';
import { day2 } from './verses/day2';
import { day3 } from './verses/day3';
import { day4 } from './verses/day4';
import { day5 } from './verses/day5';

const days: Record<number, TiruppavaiDay> = {
  1: day1,
  2: day2,
  3: day3,
  4: day4,
  5: day5,
};

export const getDay = (dayNumber: number): TiruppavaiDay | null => {
  return days[dayNumber] || null;
};