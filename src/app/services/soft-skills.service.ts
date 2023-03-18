import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Softskill } from '../models/Softskill';

@Injectable()
export class SoftSkillsService {
  urlAPI = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  getSoftSkills(): Observable<Softskill[]> {
    return this.http.get<Softskill[]>(`${this.urlAPI}softskills/list/1`);
  }

  editSoftSkill(softSkill: Softskill): Observable<Softskill> {
    return this.http.put<Softskill>(`${this.urlAPI}softskills/${softSkill.id}`, {
      skillname: softSkill.skillname,
      porcentage: softSkill.porcentage,
    });
  }

  deleteSoftSkill(id: number): Observable<Object> {
    return this.http.delete(`${this.urlAPI}softskills/${id}`);
  }

  addSoftskill(softSkill: Softskill): Observable<Softskill> {
    return this.http.post<Softskill>(`${this.urlAPI}softskills/1`, softSkill);
  }
}
