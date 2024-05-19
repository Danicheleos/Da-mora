import { Point } from './poing.interface';

export interface Boat {
  weight: number;
  length: number;
  width: number;
  keel: number;
  staksel: number;
  grot: number;
  rudder: number;
  rudderAzimuth: number;
  azimut: number;
  azimutAxeleration: number;
  speed: number;
  position: Point;
}
