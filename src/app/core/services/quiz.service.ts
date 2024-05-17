import { Injectable } from '@angular/core';
import { dataRu } from 'src/app/assets/data/data_ru';
import { dataPl } from 'src/app/assets/data/data_pl';
import { Question } from '../interfaces/question.interface';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private dataRu = dataRu;
  private dataPl = dataPl;

  public dataSource$ = new BehaviorSubject<Question[]>([]);

  constructor(private translateService: TranslateService) {
    this.dataSource$.next(this.getDataByLang(this.translateService.currentLang));
    this.translateService.onLangChange.subscribe((lang: LangChangeEvent) => {
      this.dataSource$.next(this.getDataByLang(lang.lang));
    })
  }

  public combineQuiz(): Question[] {
    return this.dataSource$.value.sort((a, b) => 0.5 - Math.random()).slice(0, 10).map(question => {
      return {
        ...question,
        answers: question.answers.sort((a, b) => 0.5 - Math.random())
      }
    });
  }

  private getDataByLang(lang: string) {
    return lang === 'ru' ? dataRu : dataPl;
  }
}
