import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// ./COMPONENTS
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { EditAboutComponent } from './components/controls/edit-about/edit-about.component';
import { EduComponent } from './components/edu/edu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HardComponent } from './components/hard/hard.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SoftComponent } from './components/soft/soft.component';
import { EditHardComponent } from './components/controls/edit-hard/edit-hard.component';
import { ChildHardskillComponent } from './components/childs/child-hardskill/child-hardskill.component';
import { EditSoftComponent } from './components/controls/edit-soft/edit-soft.component';
import { ChildSoftskillComponent } from './components/childs/child-softskill/child-softskill.component';
import { EditLangComponent } from './components/controls/edit-lang/edit-lang.component';
import { ChildLangComponent } from './components/childs/child-lang/child-lang.component';
import { ChildEduComponent } from './components/childs/child-edu/child-edu.component';

// ./SERVICES
import { AboutService } from './services/about.service';
import { EducationService } from './services/education.service';
import { HardSkillsService } from './services/hard-skills.service';
import { LanguagesService } from './services/languages.service';
import { ProyectsService } from './services/proyects.service';
import { SoftSkillsService } from './services/soft-skills.service';

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
    ProyectCardComponent,
    EditAboutComponent,
    EditHardComponent,
    ChildHardskillComponent,
    EditSoftComponent,
    ChildSoftskillComponent,
    EditLangComponent,
    ChildLangComponent,
    ChildEduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  providers: [
    HardSkillsService,
    AboutService,
    EducationService,
    SoftSkillsService,
    LanguagesService,
    ProyectsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
