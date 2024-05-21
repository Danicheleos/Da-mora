import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Question } from 'src/app/core/interfaces/question.interface';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    TranslateModule,
  ],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class QuestionComponent implements OnInit, OnDestroy {
  @Input() question?: Question;
  @Input() index?: number;

  public usedField: 'textRu' | 'textPl' = 'textPl';
  private subscription$: Subscription | null = null;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.usedField = this.translateService.currentLang === 'pl' ? 'textPl' : 'textRu';
    this.subscription$ = this.translateService.onLangChange.subscribe(lang => {
      this.usedField = lang.lang === 'pl' ? 'textPl' : 'textRu';
    });
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }

}
