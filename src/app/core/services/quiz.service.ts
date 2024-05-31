import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question.interface';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { data } from 'src/app/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private data = data;

  public dataSource$ = new BehaviorSubject<Question[]>([]);

  constructor() {
    this.dataSource$.next(this.data);
  }

  public combineQuiz(count: number): Question[] {
    return this.shuffle([...this.dataSource$.value]).slice(0, count).map(question => {
      return {
        ...question,
        answers: this.shuffle(question.answers)
      }
    });
  }

  public combineInfiniteQuiz(): Question[] {
    return this.shuffle([...this.dataSource$.value]).map(question => {
      return {
        ...question,
        answers: this.shuffle(question.answers)
      }
    });
  }

  private shuffle(arr: any[]): any[] {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
}
