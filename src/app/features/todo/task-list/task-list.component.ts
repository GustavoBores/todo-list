import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ITask } from '../../../interfaces/itask';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnChanges{
  @Input() public tasks: ITask[] = [];
  @Output() private updateTask = new EventEmitter<string>();
  @Output() private deleteTask = new EventEmitter<string>();

  //Contador de renderizações
  public countRenderer = 0;

  public onUpdateTask(id: string) {
    this.updateTask.emit(id);
  }

  public onDeleteTask(id: string) {
    this.deleteTask.emit(id);
  }

  //Verificar se a lista esta vazia
  public isEmptyTask() {
    return this.tasks.length === 0 ? true : false;
  }

  public ngOnChanges(): void {
    this.countRenderer++;
  }
}
