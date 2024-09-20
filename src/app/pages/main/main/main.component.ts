import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { QuizService } from 'src/app/core/services/quiz.service';
import { DATA_SOURCE } from 'src/app/assets/enum/datasource.enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {

  constructor (
    private router: Router,
    public quizService: QuizService
  ){}

  ngOnInit(): void {
    if (this.router.url.includes('sail')) {
      this.quizService.setDatasource(DATA_SOURCE.SAIL);
    } else {
      this.quizService.setDatasource(DATA_SOURCE.MOTOR);
    }
  }
}
