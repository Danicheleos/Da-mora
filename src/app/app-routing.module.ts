import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './pages/questions/questions/questions.component';
import { QuizComponent } from './pages/quiz/quiz/quiz.component';
import { MainComponent } from './pages/main/main/main.component';
import { HomepageComponent } from './pages/main/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'sail',
    component: MainComponent,
  },
  {
    path: 'sail/questions',
    component: QuestionsComponent,
  },
  {
    path: 'sail/quiz',
    component: QuizComponent,
  },
  {
    path: 'sail/infinite',
    component: QuizComponent,
  },

// motor part
  {
    path: 'motor',
    component: MainComponent,
  },
  {
    path: 'motor/questions',
    component: QuestionsComponent,
  },
  {
    path: 'motor/quiz',
    component: QuizComponent,
  },
  {
    path: 'motor/infinite',
    component: QuizComponent,
  },

  { path: '**', redirectTo: '/sail', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
