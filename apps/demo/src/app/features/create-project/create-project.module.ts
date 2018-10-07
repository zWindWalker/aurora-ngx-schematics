import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateProjectComponent } from './containers/create-project.component';
import { SharedModule } from '../../shared/shared.module';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizDirective } from './directives/quiz.directive';
import { FormTemplateComponent } from '@aurora-ngx/forms';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: CreateProjectComponent
    }])
  ],
  declarations: [
    CreateProjectComponent,
    QuizComponent,
    QuizDirective
  ],
  exports: [CreateProjectComponent],
  entryComponents: [
    FormTemplateComponent
  ]
})
export class CreateProjectModule {
}