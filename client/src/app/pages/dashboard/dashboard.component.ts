import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  loading = true;
  error = '';
  newTitle = '';
  newDescription = '';
  newAssignedTo = '';
  taskError = '';

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getTasks().subscribe({
      next: (res) => {
        this.tasks = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar tarefas';
        this.loading = false;
      }
    });
  }

  addTask() {
    if (!this.newTitle.trim() || !this.newAssignedTo.trim()) {
      this.taskError = 'Título e responsável são obrigatórios.';
      return;
    }
    this.tasksService.createTask(this.newTitle, this.newDescription, this.newAssignedTo).subscribe({
      next: (task) => {
        this.tasks.push(task);
        this.newTitle = '';
        this.newDescription = '';
        this.newAssignedTo = '';
        this.taskError = '';
      },
      error: () => {
        this.taskError = 'Erro ao criar tarefa.';
      }
    });
  }
}
