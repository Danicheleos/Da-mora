import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Question } from 'src/app/core/interfaces/question.interface';
import { QuizService } from 'src/app/core/services/quiz.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { QuestionComponent } from '../../questions/question/question.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
    RouterModule,
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

  isInfinite: boolean = false;

  public showResults = false;
  public result: number = 0;
  public usedField: 'textRu' | 'textPl' = 'textPl';
  private subscription$: Subscription | null = null;

  get allowToComplete() {
    return this.questions.every(question => question.answered !== undefined);
  }

  constructor (private quizService: QuizService, private translateService: TranslateService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.isInfinite = !!this.router.snapshot.routeConfig?.path?.includes('infinite');
    this.usedField = this.translateService.currentLang === 'pl' ? 'textPl' : 'textRu';
    this.subscription$ = this.translateService.onLangChange.subscribe(lang => {
      this.usedField = lang.lang === 'pl' ? 'textPl' : 'textRu';
    });
    this.startQuiz();
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }

  public startQuiz(): void {
    this.showResults = false;
    this.currentQuestionIndex = 0;
    this.questions = this.isInfinite ? this.quizService.combineInfiniteQuiz() : this.quizService.combineQuiz();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public select(index: number): void {
    if (!this.currentQuestion) return;
    this.currentQuestion.answered = index;
    setTimeout(() => this.nextQuestion(), this.isInfinite ? 1500 : 0);
  }

  public nextQuestion(): void {
    if (this.currentQuestionIndex + 1 === this.questions.length) { 
      this.complete();
      return;
    }
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public prevQuestion(): void {
    this.currentQuestionIndex--;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public complete(): void {
    if (this.isInfinite) {
      this.startQuiz();
      return;
    }
    if (!this.allowToComplete) return;
    this.showResults = true;
    this.result = this.questions.reduce((acc, question) => {
      if (question.answered !== undefined) {
        acc = acc + +question.answers[question.answered].correct;
      }
      return acc;
    }, 0)
  }
}
