import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-child-edu',
  templateUrl: './child-edu.component.html',
  styleUrls: ['./child-edu.component.css'],
})
export class ChildEduComponent {
  imgToAdd: string = '';
  establishmentToAdd: string = '';
  careerToAdd: string = '';
  dateIniToAdd: string = '';
  dateFinToAdd: string = '';
  imgAlert: boolean = false;
  careerAlert: boolean = false;
  establishmentAlert: boolean = false;
  dateAlert: boolean = false;
  @Output() newEduEvent = new EventEmitter<Education>();
  @ViewChild('closeButton') closeButton: any;

  constructor(private educationService: EducationService) {}

  onSubmit(form: any) {
    console.log(form.value.imgToAdd);
    let valid = true;
    if (!form.value.imgToAdd) {
      this.imgAlert = true;
      valid = false;
    }
    if (!form.value.establishmentToAdd) {
      this.establishmentAlert = true;
      valid = false;
    }
    if (!form.value.careerToAdd) {
      this.careerAlert = true;
      valid = false;
    }
    const re = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    if (
      !re.test(form.value.dateIniToAdd) ||
      !re.test(form.value.dateFinToAdd)
    ) {
      this.dateAlert = true;
      valid = false;
    }
    if (valid) {
      const edu = new Education();
      edu.career = this.careerToAdd;
      edu.dateFin = new Date(this.dateFinToAdd);
      edu.dateIni = new Date(this.dateIniToAdd);
      edu.establishment = this.establishmentToAdd;
      edu.img = this.imgToAdd;
      this.educationService
        .addEducation(edu)
        .subscribe((e) => this.newEduEvent.emit(e));
      this.imgAlert = false;
      this.dateAlert = false;
      this.establishmentAlert = false;
      this.careerAlert = false;
      this.dateFinToAdd = '';
      this.dateIniToAdd = '';
      this.imgToAdd = '';
      this.establishmentToAdd = '';
      this.careerToAdd = '';
      this.closeButton.nativeElement.click();
    }
  }
}
