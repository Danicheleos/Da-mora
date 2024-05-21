import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.translate.use(localStorage.getItem('language') || this.translate.defaultLang);
  }

  public changeLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}


