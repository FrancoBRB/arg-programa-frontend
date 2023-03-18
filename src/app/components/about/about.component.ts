import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { AboutService } from 'src/app/services/about.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  about: string = '';

  constructor(private aboutService: AboutService) {}

  editProfile(profile: Profile) {
    this.about = profile.about;
  }

  highlightText(text: string): string {
    let stepone: string = text.replace(
      'estudiante de Ingeniería Informática',
      `<span class="highlight">estudiante de Ingeniería Informática</span>`
    );
    let steptwo: string = stepone.replace(
      'apasionado por la tecnología',
      `<span class="highlight">apasionado por la tecnología</span>`
    );
    let stepthree: string = steptwo.replace(
      'Oracle Next Education y Argentina Programa',
      `<span class="highlight">Oracle Next Education y Argentina Programa</span>`
    );
    return stepthree;
  }

  ngOnInit() {
    this.aboutService
      .getProfileByEmail('francojb5@hotmail.com')
      .subscribe((profile) => {
        this.about = this.highlightText(profile.about);
      });
  }
}
