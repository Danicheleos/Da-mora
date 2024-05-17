import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuizService } from 'src/app/core/services/quiz.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    CommonModule,
    QuestionComponent,
    TranslateModule,
  ],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {
  constructor(public quizService: QuizService) {}

 }
