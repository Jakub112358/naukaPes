import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent, children:[
      {path: 'questionList', loadChildren: () => import('./views/adminViews/question-list/question-list.module').then(m => m.QuestionListModule)},
      {path: 'addQuestion', loadChildren: () => import('./views/adminViews/add-question/add-question.module').then(m => m.AddQuestionModule)},
      {path: 'quiz', loadChildren: () => import('./views/adminViews/quiz/quiz.module').then(m => m.QuizModule)},
      {path: 'metric', loadChildren: () => import('./views/adminViews/metric/metric.module').then(m => m.MetricModule)},
      {path: '**', redirectTo: 'notfound'}
    ]},
  {path: '', pathMatch: "full", redirectTo: '/admin/questionList'},
  {path: 'notfound', loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path:'**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
