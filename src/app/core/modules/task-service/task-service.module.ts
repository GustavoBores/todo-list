import { NgModule } from '@angular/core';
import { TaskService } from '../../service/task/task.service';
import { AbstractTaskService } from '../../../abstract/abstract-task-service.abstract';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: AbstractTaskService,
      useClass: TaskService
    }
  ]
})
export class TaskServiceModule { }
