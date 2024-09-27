import { Component, Input } from '@angular/core';
import { ITask } from '../../../interfaces/itask';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.scss'
})
export class TaskInfoComponent {
  @Input() tasks: ITask[] = [];
  

  public getSizeCompletedOfTasks() {
    let size = 0;

    for (const task of this.tasks) {
      if (task.completed) {
        size = size + 1;
      }
    }

    return `${size} de ${this.tasks.length}`;
  }
}
