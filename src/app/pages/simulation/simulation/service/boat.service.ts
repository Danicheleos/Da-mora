import { Injectable } from '@angular/core';
import { Boat } from '../interface/boat.interface';
import { SimulationService } from './simulation.service';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  boat: Boat | null = null;
  image = new Image(10, 8);
  ctx: CanvasRenderingContext2D | null = null;


  constructor(
    private simulationService: SimulationService
  ) {
    this.image.src = '/assets/images/boat.png';
    this.image.style.background = 'transparent'
    this.image.onload = () => {
      this.drawBoat();
    }
  }

  spawnBoat(ctx: CanvasRenderingContext2D): void {
    this.ctx = ctx;

    const spawn = this.simulationService.field$.value.spawn;

    this.boat = {
      weight: 500,
      length: 11,
      width: 6,
      keel: 10,
      staksel: 25,
      grot: 25,
      rudder: 0.25,
      rudderAzimuth: 0,
      azimut: 90,
      azimutAxeleration: 0,
      speed: 0.5,
      position: spawn,

    }

    setInterval(() => {
      if (!this.boat || !this.ctx) return;
      this.calculateRudder();
      this.boat.azimut += this.boat.azimutAxeleration;
      this.moveBoat();
      this.drawBoat();
    }, 100);

    this.drawBoat();
  }

  drawBoat() {
    if (!this.ctx || ! this.boat) return;

    this.ctx.clearRect(0, 0, 1000, 1000);
    this.ctx.save();
    this.ctx.translate(this.boat.position.x,  this.boat.position.y);

    this.ctx.rotate(this.boat.azimut*Math.PI/180);
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';

    this.ctx.moveTo(0, this.boat.length/2);
    this.ctx.lineTo(0.5*Math.sin(this.boat.rudderAzimuth*Math.PI/180), (this.boat.length/2 + 0.5*Math.cos(this.boat.rudderAzimuth*Math.PI/180)));
    this.ctx.stroke();

    this.ctx.drawImage(this.image, -this.boat.width/2,  -this.boat.length/2, this.boat.width, this.boat.length);
    this.ctx.restore();
  }

  moveBoat(): void {
    if (!this.boat) return;
    this.boat.position = {
      x: this.boat.position.x + this.boat.speed*Math.sin(this.boat.azimut*Math.PI/180),
      y: this.boat.position.y - this.boat.speed*Math.cos(this.boat.azimut*Math.PI/180)
    }
  }

  calculateRudder(): void {
    if (!this.boat) return;
    const slowSpeedRuffle = 1/2 * 1.28 * 1025 * this.boat.rudder * Math.abs(Math.sin(this.boat.rudderAzimuth*Math.PI/180)) *-1 * this.boat.speed / this.boat.weight;
    const turnSpeedRuffle = (slowSpeedRuffle * 6 / 0.5) * 1/2 * 1.28 * 1025 * this.boat.keel / this.boat.weight;
    this.boat.speed += slowSpeedRuffle;
    this.boat.azimutAxeleration = turnSpeedRuffle / (Math.pow(this.boat.length/2, 2)*Math.PI) * 360 * this.boat.rudder / Math.abs(this.boat.rudder);
  }
}
