import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language } from 'src/app/models/Language';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-child-lang',
  templateUrl: './child-lang.component.html',
  styleUrls: ['./child-lang.component.css'],
})
export class ChildLangComponent implements OnInit {
  @Input() lang: Language = new Language();
  newLangName: string = '';
  newLangPorcentage: number = 0;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<Language>();

  constructor(private languageService: LanguagesService) {}

  ngOnInit() {}

  editLang() {
    if(this.newLangName){
      this.lang.langName = this.newLangName;
    }
    if(this.newLangPorcentage>0){
      this.lang.porcentage = this.newLangPorcentage;
    }    
    this.languageService
      .editLanguage(this.lang)
      .subscribe((e) => this.updateEvent.emit(e));
  }

  deleteLang() {
    if (this.lang.id) {
      this.languageService.deleteLanguage(this.lang.id).subscribe();
      this.deleteEvent.emit(this.lang.id);
    }
  }
}
