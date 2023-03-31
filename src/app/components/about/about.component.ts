import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { AboutService } from 'src/app/services/about.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  about: string = '';
  isLogged: boolean = false;

  constructor(private aboutService: AboutService, private authService: AuthService) {}

  editProfile(profile: Profile) {
    this.about = this.highlightText(profile.about);
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
      .getProfile()
      .subscribe((profile) => {
        this.about = this.highlightText(profile.about);
      });
    this.isLogged = this.authService.isAuthenticated();
  }
}
