import { Component,OnInit } from '@angular/core';
import { TaskForm } from './components/task-form/task-form'
import { TaskList } from './components/task-list/task-list'
import { ITask,TaskService } from './services/task';
@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'todo-list-app';
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
      this.tasks = this.taskService.getTasks();
  }
  onTaskAdded(title: string) {
      this.taskService.addTask(title);
      this.tasks= this.taskService.getTasks();} // Atualiza a lista de tarefas
  
}
