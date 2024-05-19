import { Point } from './poing.interface';

export interface Field {
  width: number;
  height: number;
  spawn: Point;
  finish: {
    A: Point;
    B: Point;
  }
}
