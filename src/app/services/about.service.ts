import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../models/Profile';

@Injectable()
export class AboutService {
  urlAPI = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.urlAPI}profiles/1`);
  }

  editProfile(profile : Profile):Observable<Profile>{
    return this.http.put<Profile>(`${this.urlAPI}profiles/${profile.id}`,profile);
  }
}
