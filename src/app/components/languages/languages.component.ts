import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/Language';
import { AuthService } from 'src/app/services/auth.service';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[] = [];
  isLogged: boolean = false;

  constructor(private langsService: LanguagesService, private authService: AuthService) { }
  
  addLanguage(lang: Language){
    this.languages.push(lang);
  }

  deleteLanguage(id: number){
    this.languages = this.languages.filter((lang) => lang.id != id);
  }

  updateLanguage(lang: Language){
    const LangToUpdate = this.languages.find(e => e.id === lang.id);
    if(LangToUpdate){
      LangToUpdate.langName = lang.langName;
      LangToUpdate.porcentage = lang.porcentage;
    }
  }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.langsService.getLanguages().subscribe((langs) => {
      this.languages = langs;
    })
  }

}
