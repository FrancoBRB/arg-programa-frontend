import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {

  apiURL = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.apiURL}projects/list/1`)
  }

  updateProject(project: Project):Observable<Project>{
    return this.http.put<Project>(`${this.apiURL}projects/${project.id}`,project)
  }

  addProject(project: Project):Observable<Project>{
    return this.http.post<Project>(`${this.apiURL}projects/1`,project)
  }

  deleteProject(id: number):Observable<Object>{
    return this.http.delete(`${this.apiURL}projects/${id}`)
  }
}
