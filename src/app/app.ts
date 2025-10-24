// Importações necessárias do Angular e de outros arquivos
import { Component, OnInit } from '@angular/core';
// Component: serve pra criar um "bloco" da tela (um componente)
// OnInit: é uma interface que permite rodar código quando o componente é iniciado

import { TaskForm } from './components/task-form/task-form';
// Importa o componente TaskForm, que provavelmente é o formulário para adicionar tarefas

import { TaskList } from './components/task-list/task-list';
// Importa o componente TaskList, que mostra a lista de tarefas

import { ITask, TaskService } from './services/task';
// ITask: interface que define como uma tarefa deve ser (id, título, se está feita ou não)
// TaskService: serviço que guarda e gerencia todas as tarefas (adicionar, listar, marcar como feita)

// Define o componente principal da aplicação
@Component({
  selector: 'app-root', 
  // Nome que usamos no HTML principal para colocar esse componente
  imports: [TaskForm, TaskList ], 
  // Aqui estamos dizendo que dentro do App vamos usar esses dois componentes
  templateUrl: './app.html', 
  // HTML que define como o App vai aparecer na tela
  styleUrl: './app.css' 
  // CSS que deixa o App bonitinho
})

// Classe do componente principal
export class App implements OnInit {
  title = 'todo-list-app'; 
  // Um título qualquer da aplicação, não faz muito mais que mostrar texto

  tasks: ITask[] = []; 
  // Array que vai guardar todas as tarefas. Começa vazio

  constructor(private taskService: TaskService) {}
  // Aqui estamos pegando o TaskService para usar dentro do App
  // 'private' significa que ele só vai ser usado dentro dessa classe
  // TaskService é tipo uma “caixinha de tarefas”, que sabemos que existe e podemos mexer nela

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(); 
    // Quando o componente iniciar, pega todas as tarefas do serviço e coloca no array tasks
  }

  onTaskAdded(title: string){
    // Função que é chamada quando uma tarefa nova é adicionada
    this.taskService.addTask(title); 
    // Chama o serviço para realmente criar a tarefa
    this.tasks = this.taskService.getTasks(); 
    // Atualiza a lista de tarefas pra refletir a nova tarefa na tela
  }

  onTaskToggled(taskId: number){
    // Função chamada quando uma tarefa é marcada ou desmarcada
    this.taskService.toggleTaskDone(taskId); 
    // Manda o serviço alterar o status da tarefa (feito/não feito)
    this.tasks = this.taskService.getTasks(); 
    // Atualiza a lista de tarefas na tela depois da mudança
  }
}
