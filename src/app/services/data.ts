import { Injectable } from '@angular/core';
import { DesignProject } from '../shared/models/design-project.model';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Data {
  public apiUrl = '/projects';

  private itemSubject = new BehaviorSubject<DesignProject[]>([]);
  designProjects$ = this.itemSubject.asObservable();

  constructor(private http: HttpClient) {}

  getItems(): void {
    this.http.get<DesignProject[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('❌ Error while getting data: ', err);
        return throwError(() => err);
      })
    ).subscribe((projects) => this.itemSubject.next(projects)) ;
  }

  getItemById(id: string): Observable<DesignProject> {
    return this.http.get<DesignProject>(`${this.apiUrl}/${id}`).pipe(
      catchError((err) => {
        console.error('❌ Error while getting project: ', err);
        return throwError(() => err);
      })
    );
  }

  // updateItems(newProjects: DesignProject[]): void {
  //   this.itemSubject.next(newProjects);
  // }

  getFilteredProject(searchText: string): void {
    const text = searchText.toLowerCase();

    const filtered = this.itemSubject
      .getValue()
      .filter(
        (project) =>
          project.title.toLowerCase().includes(text) ||
          project.short_sub.toLowerCase().includes(text)
      );

    if (!text.trim()) {
      this.getItems();
    } else {
      this.itemSubject.next(filtered);
    }
  }

  addItem(newProject: DesignProject): Observable<DesignProject> {
    return this.http.post<DesignProject>(this.apiUrl, newProject).pipe(
      catchError((err) => {
        console.error('❌ Error while posting project:', err);
        return throwError(() => err);
      })
    );
  }
}
