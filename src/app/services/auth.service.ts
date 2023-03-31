import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/Token';
import { User } from '../models/User';

const ENDPOINT: string = environment.API_BASE_URL + 'auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<Token> {
    return this.http.post<Token>(`${ENDPOINT}authenticate`, user, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.get(`${ENDPOINT}logout`);
  }

  isAuthenticated(): boolean {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
