import { Component,Input } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { Task } from '../../services/task';


@Component({
  selector: 'app-task-list',
  imports: [ TaskItem ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];
}
