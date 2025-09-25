import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: any = null;
  comments: any[] = [];
  newComment = '';
  commentError = '';
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tasksService.getTasks().subscribe({
        next: (tasks) => {
          this.task = tasks.find((t: any) => t.id == id);
          this.loading = false;
        },
        error: () => {
          this.error = 'Erro ao carregar tarefa';
          this.loading = false;
        }
      });
      this.commentsService.getComments().subscribe({
        next: (comments) => {
          this.comments = comments.filter((c: any) => c.taskId == id);
        }
      });
    }
  }

  addComment() {
    if (!this.newComment.trim()) {
      this.commentError = 'Comentário não pode ser vazio.';
      return;
    }
    const author = 'Você'; // Pode ser ajustado para pegar do usuário logado
    const taskId = this.task?.id;
    this.commentsService.addComment(this.newComment, author, taskId).subscribe({
      next: (comment) => {
        this.comments.push(comment);
        this.newComment = '';
        this.commentError = '';
      },
      error: () => {
        this.commentError = 'Erro ao adicionar comentário.';
      }
    });
  }
}
