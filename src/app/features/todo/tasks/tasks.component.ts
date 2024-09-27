import { Component, OnInit } from '@angular/core';
import { TaskServiceModule } from '../../../core/modules/task-service/task-service.module';
import { AbstractTaskService } from '../../../abstract/abstract-task-service.abstract';
import { TaskListComponent } from "../task-list/task-list.component";
import { TaskInfoComponent } from "../task-info/task-info.component";
import { ITask } from '../../../interfaces/itask';
import { TaskFormComponent } from "../task-form/task-form.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskServiceModule, TaskListComponent, TaskInfoComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  public tasks: ITask[] = [];

  constructor(private taskService: AbstractTaskService) {
  }

  public updateTask(id: string) {
    const task = this.findTaskById(id);

    if (task === undefined) {
      return;
    }

    const newTask: ITask = {
      id: task.id,
      title: task.title,
      completed: !task.completed
    };

    this.taskService.updateTask(id, newTask).subscribe(() => {
      this.tasks = this.tasks.map((value) => {
        if (value.id === id) {
          value.completed = !value.completed;
          return value;
        }

        return value;
      });
    });
  }

  public deleteTask(id: string) {
    const task = this.findTaskById(id);

    if (task === undefined) {
      return;
    }

    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((value) => value.id !== id);
    });
  }

  public postTask(title: string) {
    const task = {
      title: title,
      completed: false
    };

    this.taskService.postTask(task as ITask).subscribe(() => {
      this.getTasks();
    });
  }

  private getTasks() {
    this.taskService.getTasks()
      .subscribe((value) => this.tasks = value);
  }

  private findTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }
  
  ngOnInit(): void {
    this.getTasks();
  }
}
