import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITask } from '../../../interfaces/itask';
import { AbstractTaskService } from '../../../abstract/abstract-task-service.abstract';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends AbstractTaskService {
  private readonly URL = "http://localhost:3000/tasks";

  constructor(private httpClient: HttpClient) {
    super();
  }

  public override getTasks(): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(this.URL);
  }

  public override updateTask(id: string, body: ITask): Observable<void> {
    return this.httpClient.patch<void>(`${this.URL}/${id}`, body);
  }

  public override deleteTask(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.URL}/${id}`);
  }
  
  public override postTask(body: ITask): Observable<void> {
    return this.httpClient.post<void>(this.URL, body);
  }
}
