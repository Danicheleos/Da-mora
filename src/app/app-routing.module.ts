import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './pages/questions/questions/questions.component';
import { QuizComponent } from './pages/quiz/quiz/quiz.component';
import { MainComponent } from './pages/main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'infinite',
    component: QuizComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
