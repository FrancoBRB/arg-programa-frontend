import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-child-edu',
  templateUrl: './child-edu.component.html',
  styleUrls: ['./child-edu.component.css']
})
export class ChildEduComponent{

  imgToAdd: string = "";
  establishmentToAdd: string = "";
  careerToAdd: string = "";
  dateIniToAdd: string = "";
  dateFinToAdd: string = "";
  @Output() newEduEvent = new EventEmitter<Education>();

  constructor(private educationService: EducationService) { }

  addEducation(){
    const edu = new Education;
    edu.career = this.careerToAdd;
    edu.dateFin = new Date(this.dateFinToAdd);
    edu.dateIni = new Date(this.dateIniToAdd);
    edu.establishment = this.establishmentToAdd;
    edu.img = this.imgToAdd;
    this.educationService.addEducation(edu).subscribe(e => this.newEduEvent.emit(e));
  }


}
