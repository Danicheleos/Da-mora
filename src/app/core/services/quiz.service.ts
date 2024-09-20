import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question.interface';
import { BehaviorSubject } from 'rxjs';
import { data as dataSail } from 'src/app/assets/data/data-sail';
import { data as dataMotor } from 'src/app/assets/data/data-motor';
import { DATA_SOURCE } from 'src/app/assets/enum/datasource.enum';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public dataSource$ = new BehaviorSubject<Question[]>([]);
  public dataSourceType$ = new BehaviorSubject<DATA_SOURCE>(DATA_SOURCE.SAIL);
  constructor() {}

  public setDatasource(datasource: DATA_SOURCE) {
    const data = datasource === DATA_SOURCE.SAIL ? dataSail : dataMotor;
    this.dataSourceType$.next(datasource);
    this.dataSource$.next(data);
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
