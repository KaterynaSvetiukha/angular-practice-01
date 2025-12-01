import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface LoginResponse {
  accessToken: string;
  user: any;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data).pipe(
      tap(responce => {
        localStorage.setItem('accessToken', responce.accessToken);
        localStorage.setItem('user', JSON.stringify(responce.user));
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }

  getUser(): any | null {
    const s = localStorage.getItem('user');
    return s ? JSON.parse(s) : null; // если строка существует, то превращаем её обратно в обьект
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
