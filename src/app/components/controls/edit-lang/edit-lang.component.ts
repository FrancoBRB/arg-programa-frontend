import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Language } from 'src/app/models/Language';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-edit-lang',
  templateUrl: './edit-lang.component.html',
  styleUrls: ['./edit-lang.component.css']
})
export class EditLangComponent implements OnInit {

  languages: Language[] = [];
  newLangName: string = '';
  newLangPorcentage: number = 0;
  @Output() newLangEvent = new EventEmitter<Language>();
  @Output() deleteLangEvent = new EventEmitter<number>();
  @Output() updateLangEvent = new EventEmitter<Language>();

  constructor(private languageService: LanguagesService) { }

  ngOnInit() {
    this.languageService.getLanguages().subscribe((langs) => {
      this.languages = langs;
    })
  }

  addLanguage() {
    const langToAdd = new Language();
    langToAdd.langName = this.newLangName;
    langToAdd.porcentage = this.newLangPorcentage;
    this.languageService.addLanguage(langToAdd).subscribe((lang) => {
      this.languageService
        .getLanguages()
        .subscribe((e) => (this.languages = e));
      this.newLangEvent.emit(lang);
    });
  }

  deleteLanguage(id:number){
    this.deleteLangEvent.emit(id);
    this.languages = this.languages.filter((lang) => lang.id != id);
  }

  updateLanguage(lang: Language){
    this.updateLangEvent.emit(lang);
  }
}
