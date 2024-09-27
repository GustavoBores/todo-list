import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  @Output() public postTask = new EventEmitter<string>();
  public title = new FormControl("", [Validators.required, Validators.min(3)]);

  public onPostTask() {
    if ( this.title.invalid ) {
      return;
    }

    if ( this.title.value === null ) {
      return;
    }

    this.postTask.emit(this.title.value);

    this.title.reset();
  }
}
