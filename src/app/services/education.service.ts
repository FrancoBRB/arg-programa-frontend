import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/Education';

@Injectable()
export class EducationService {
  apiURL = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiURL}edu/list/1`);
  }

  updateEducation(edu: Education): Observable<Object> {
    return this.http.put(`${this.apiURL}edu/${edu.id}`, edu);
  }

  addEducation(edu: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiURL}edu/1`, edu);
  }

  deleteEducation(id:number): Observable<Object>{
    return this.http.delete(`${this.apiURL}edu/${id}`)
  }
}
