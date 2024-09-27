import { Observable } from "rxjs";
import { ITask } from "../interfaces/itask";

export abstract class AbstractTaskService {
  public abstract getTasks(): Observable<ITask[]>;
  public abstract updateTask(id: string, body: ITask): Observable<void>;
  public abstract deleteTask(id: string): Observable<void>;
  public abstract postTask(body: ITask): Observable<void>;
}