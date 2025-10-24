import { Injectable } from '@angular/core';

export interface ITask {
  id: number;
  title: string;
  done: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: ITask[] =[
    { id: 1,title: 'Estudar Angular', done: true },
    { id: 2, title: 'Fazer a atividades da aula', done: false },
    { id: 3, title: 'Tomar um café', done: false },
  ]

  constructor () {}
  getTasks() {
    return this.tasks
  }
  addTask(title:string) {
    const newId = this.tasks.length >0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    this.tasks.push({ id: newId,title, done: false });
  }
}
