import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../services/task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() task!: ITask;
  @Output() taskToggled = new EventEmitter<number>();

  onToggle() {
    this.taskToggled.emit(this.task.id);
  }
}