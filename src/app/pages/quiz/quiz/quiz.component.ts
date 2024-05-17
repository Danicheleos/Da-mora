import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Question } from 'src/app/core/interfaces/question.interface';
import { QuizService } from 'src/app/core/services/quiz.service';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { QuestionComponent } from '../../questions/question/question.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    QuestionComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class QuizComponent implements OnInit {
  public currentQuestion?: Question;
  public questions: Question[] = [];
  public currentQuestionIndex: number = 0;

  public showResults = false;
  public result: number = 0;

  constructor (private quizService: QuizService) {}

  ngOnInit(): void {
    this.startQuiz();
  }

  public startQuiz(): void {
    this.showResults = false;
    this.currentQuestionIndex = 0;
    this.questions = this.quizService.combineQuiz();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public nextQuestion(): void {
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public prevQuestion(): void {
    this.currentQuestionIndex--;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public complete(): void {
    this.showResults = true;
    this.result = this.questions.reduce((acc, question) => {
      if (question.answered !== undefined) {
        acc = acc + +question.answers[question.answered].correct;
      }
      return acc;
    }, 0)
  }

  get allowToComplete() {
    return this.questions.every(question => question.answered !== undefined);
  }
}
