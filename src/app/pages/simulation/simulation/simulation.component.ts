import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CompasComponent } from './controls/compas/compas/compas.component';
import { SimulationService } from './service/simulation.service';
import { Field } from './interface/field.inteface';
import { BoatService } from './service/boat.service';
import { RudderComponent } from './controls/compas/rudder/rudder/rudder.component';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [
    CommonModule,
    CompasComponent,
    RudderComponent
  ],
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SimulationComponent implements AfterViewInit {
  @ViewChild('canvas', {static: true}) canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('boat', {static: true}) boat!: ElementRef;
  private ctx!: CanvasRenderingContext2D | null;

  private field: Field = {} as Field;
  constructor(private simulationService: SimulationService, private boatService: BoatService) {

  }

  ngAfterViewInit(): void {
    if (this.canvas) {
      this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    this.simulationService.field$.subscribe((field) => {
      if (this.ctx) {
        this.field = field;

        this.setupField();
        this.drawFinish();
        this.boatService.spawnBoat(this.ctx);

      }

    });
  }

  setupField(): void {
    if (!this.ctx) return;
    this.ctx.canvas.width = this.field.width;
    this.ctx.canvas.height = this.field.height;
  }

  drawFinish(): void {
    if (!this.ctx) return;

    const {A, B} = this.field.finish;

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'red';
    this.ctx.arc(A.x, A.y, 10, 0, 2 * Math.PI);
    this.ctx.arc(B.x, B.y, 10, 0, 2 * Math.PI);
    this.ctx.stroke();
  }


}
