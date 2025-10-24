import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
 @Output() taskAdded = new EventEmitter<string>();


  addTask(title: string)  {
    if (title) {
      this.taskAdded.emit(title);
    }
  }
}
