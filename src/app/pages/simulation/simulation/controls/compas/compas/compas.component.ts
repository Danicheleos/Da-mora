import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Wind } from '../../../interface/wind.interface';
import { SimulationService } from '../../../service/simulation.service';

@Component({
  selector: 'app-compas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './compas.component.html',
  styleUrls: ['./compas.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CompasComponent {

  constructor(public simulationService: SimulationService) {}

  addWindPower(value: number) {
    this.simulationService.addWindPower(value);
  }

  addWindAzimuth(value: number) {
    this.simulationService.addWindAzimuth(value);
  }
}
