import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)},
  {path: 'notfound', loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)},
  {path: 'admin', component: AdminLayoutComponent, children:[
      {path: 'questionList', loadChildren: () => import('./views/adminViews/question-list/question-list.module').then(m => m.QuestionListModule)},
      {path: 'addQuestion', loadChildren: () => import('./views/adminViews/add-question/add-question.module').then(m => m.AddQuestionModule)},
      {path: 'quiz', loadChildren: () => import('./views/adminViews/quiz/quiz.module').then(m => m.QuizModule)}
    ]},
  {path: 'user', loadChildren: () => import('./views/user-layout/user-layout.module').then(m => m.UserLayoutModule)},
  {path:'**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
