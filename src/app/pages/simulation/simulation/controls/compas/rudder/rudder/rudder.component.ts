import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { BoatService } from '../../../../service/boat.service';

@Component({
  selector: 'app-rudder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule
  ],
  templateUrl: './rudder.component.html',
  styleUrls: ['./rudder.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RudderComponent {

  constructor(private boatService: BoatService){}

  changeRudder(value: any): void {
    if (this.boatService.boat) {
      this.boatService.boat.rudderAzimuth = value;
    }
  }
}
