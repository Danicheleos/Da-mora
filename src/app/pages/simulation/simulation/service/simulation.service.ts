import { Injectable } from '@angular/core';
import { Wind } from '../interface/wind.interface';
import { BehaviorSubject } from 'rxjs';
import { Field } from '../interface/field.inteface';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  wind$ = new BehaviorSubject<Wind>({ azimuth: 30, power: 5 });
  field$ = new BehaviorSubject<Field>({} as Field);

  constructor() {
    this.generateField();
  }

  addWindPower(value: number) {
    const wind = this.wind$.value;
    wind.power += value;
    if (wind.power < 0) {
      wind.power = 0;
    }
    this.wind$.next(wind);
  }

  addWindAzimuth(value: number) {
    const wind = this.wind$.value;
    wind.azimuth += value;
    if (wind.azimuth < 0) {
      wind.azimuth = wind.azimuth + 360;
    }
    if (wind.azimuth > 360) {
      wind.azimuth %= 360;
    }

    this.wind$.next(wind);
  }

  generateField() {
    const field: Field = {
      width: 1000,
      height: 1000,
      spawn: {
        x: 100,
        y: 300
      },
      finish: {
        A: {
          x: 900,
          y: 800
        },
        B: {
          x: 800,
          y: 900
        }
      }
    };

    this.field$.next(field);
  }

}
