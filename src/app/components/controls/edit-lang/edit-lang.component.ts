import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Language } from 'src/app/models/Language';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-edit-lang',
  templateUrl: './edit-lang.component.html',
  styleUrls: ['./edit-lang.component.css'],
})
export class EditLangComponent implements OnInit {
  languages: Language[] = [];
  newLangName: string = '';
  newLangPorcentage: number = 0;
  alert: boolean = false;
  @Output() newLangEvent = new EventEmitter<Language>();
  @Output() deleteLangEvent = new EventEmitter<number>();
  @Output() updateLangEvent = new EventEmitter<Language>();

  constructor(private languageService: LanguagesService) {}

  ngOnInit() {
    this.languageService.getLanguages().subscribe((langs) => {
      this.languages = langs;
    });
  }

  onSubmit(form: any) {
    if (!form.value.newLangName) {
      this.alert = true;
      return;
    }
    this.alert = false;
    const langToAdd = new Language();
    langToAdd.langName = form.value.newLangName;
    langToAdd.porcentage = form.value.newLangPorcentage;
    this.languageService.addLanguage(langToAdd).subscribe((lang) => {
      this.languageService
        .getLanguages()
        .subscribe((e) => (this.languages = e));
      this.newLangEvent.emit(lang);
    });
    this.newLangName = '';
    this.newLangPorcentage = 0;
  }

  deleteLanguage(id: number) {
    this.deleteLangEvent.emit(id);
    this.languages = this.languages.filter((lang) => lang.id != id);
  }

  updateLanguage(lang: Language) {
    this.updateLangEvent.emit(lang);
  }
}
