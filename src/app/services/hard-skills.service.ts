import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hardskill } from '../models/Hardskill';

@Injectable()
export class HardSkillsService {
  urlAPI = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  getHardSkills(): Observable<Hardskill[]> {
    return this.http.get<Hardskill[]>(`${this.urlAPI}hardskills/list/1`);
  }

  editHardSkill(hardskill: Hardskill): Observable<Hardskill> {
    return this.http.put<Hardskill>(
      `${this.urlAPI}hardskills/${hardskill.id}`,
      {
        skillname: hardskill.skillname,
      }
    );
  }

  deleteHardSkill(id: number): Observable<Object> {
    return this.http.delete(`${this.urlAPI}hardskills/${id}`);
  }

  addHardSkill(hardskill: Hardskill): Observable<Hardskill> {
    return this.http.post<Hardskill>(`${this.urlAPI}hardskills/1`, hardskill);
  }
}
