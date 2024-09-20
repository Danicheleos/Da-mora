import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    RouterModule,
  ],
  styleUrls: ['./homepage.component.scss'],
  templateUrl: './homepage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {

}
