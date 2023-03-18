import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Language } from '../models/Language';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  urlAPI = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.urlAPI}languages/list/1`);
  }

  editLanguage(language: Language): Observable<Language> {
    return this.http.put<Language>(`${this.urlAPI}languages/${language.id}`, {
      langName: language.langName,
      porcentage: language.porcentage,
    });
  }

  deleteLanguage(id: number): Observable<Object> {
    return this.http.delete(`${this.urlAPI}languages/${id}`);
  }

  addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(`${this.urlAPI}languages/1`, language);
  }
}
