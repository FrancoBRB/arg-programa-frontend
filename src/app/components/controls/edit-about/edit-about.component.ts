import { Component, OnInit, NgModule, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/Profile';
import { AboutService } from 'src/app/services/about.service';


@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  public about!: string;
  profile : Profile = new Profile();
  @Output() editProfileEvent = new EventEmitter<Profile>();
  alert: boolean = false;
  @ViewChild('closeButton') closeButton: any;

  constructor(private aboutService: AboutService, private router: Router) { }

  ngOnInit() {
    this.aboutService.getProfileByEmail("francojb5@hotmail.com").subscribe((p)=>{
      this.profile = p;
      this.about = p.about;
    })
  }

  onSubmit(form:any){
    if(!form.value.newAbout){
      this.alert = true;
      return;
    }
    this.alert = false;
    this.profile.about = form.value.newAbout;
    this.aboutService.editProfile(this.profile).subscribe(e => {
      this.editProfileEvent.emit(e);
    });
    this.closeButton.nativeElement.click();
  }
}
