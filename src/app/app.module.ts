import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { EduComponent } from './components/edu/edu.component';

// ./COMPONENTS
import { FooterComponent } from './components/footer/footer.component';
import { HardComponent } from './components/hard/hard.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SoftComponent } from './components/soft/soft.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    EduComponent,
    SoftComponent,
    HardComponent,
    LanguagesComponent,
    ProyectsComponent,
    ProyectCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
