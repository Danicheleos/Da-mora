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
    return this.shuffle([...this.dataSource$.value]).slice(0, 10).map(question => {
      return {
        ...question,
        answers: this.shuffle(question.answers)
      }
    });
  }

  private getDataByLang(lang: string) {
    return lang === 'ru' ? dataRu : dataPl;
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
