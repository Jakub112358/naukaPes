import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent, children:[
      {path: 'questions', loadChildren: () => import('./views/admin-views/question-list/question-list.module').then(m => m.QuestionListModule)},
      {path: 'questions/:id', loadChildren: () => import('./views/admin-views/question-details/question-details.module').then(m => m.QuestionDetailsModule)},
      {path: 'add-question', loadChildren: () => import('./views/admin-views/add-question/add-question.module').then(m => m.AddQuestionModule)},
      {path: 'quiz', loadChildren: () => import('./views/admin-views/quiz/quiz.module').then(m => m.QuizModule)},
      {path: 'metric', loadChildren: () => import('./views/admin-views/metric/metric.module').then(m => m.MetricModule)},
      {path: '**', redirectTo: 'notfound'}
    ]},
  {path: '', pathMatch: "full", redirectTo: '/admin/questions'},
  {path: 'notfound', loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)},
  //{path:'**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
