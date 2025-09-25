import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTask(title: string, description: string, assignedTo: string): Observable<any> {
    return this.http.post(this.apiUrl, { title, description, assignedTo });
  }

  updateTask(id: number, title: string, description: string, assignedTo: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { title, description, assignedTo });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
