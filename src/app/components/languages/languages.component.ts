import { Component, OnInit } from '@angular/core';
import { Language, LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[] = [];

  constructor(private langsService: LanguagesService) { }

  ngOnInit() {
    this.langsService.getLanguages().subscribe((langs) => {
      this.languages = langs;
    })
  }

}
