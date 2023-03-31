import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/Education';
import { AuthService } from 'src/app/services/auth.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css'],
})
export class EduComponent implements OnInit {
  educations: Education[] = [];
  switch: boolean = false;
  isLogged: boolean = false;

  constructor(private eduService: EducationService, private authService: AuthService) {}

  changeMode() {
    if (this.switch) {
      this.switch = false;
    } else {
      this.switch = true;
    }
  }

  addEducation(edu: Education) {
    this.educations.push(edu);
    this.switch = false;
  }

  formatedDate(date: Date) {
    const newDate = new Date(date);

    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();

    return `${month}/${year}`;
  }

  deleteEducation(id: number | null) {
    if (id) {
      this.eduService.deleteEducation(id).subscribe();
      this.educations = this.educations.filter((e) => e.id!= id);
    }
  }


  updateEducation(id: number | null) {
    if (id) {
      const edutoAdd = new Education();
      edutoAdd.id = id;
      edutoAdd.career = (<HTMLInputElement>(
        document.querySelector(`#career-${id}`)
      )).value;
      edutoAdd.establishment = (<HTMLInputElement>(
        document.querySelector(`#establishment-${id}`)
      )).value;
      edutoAdd.img = (<HTMLInputElement>(
        document.querySelector(`#img-${id}`)
      )).value;
      edutoAdd.dateFin = new Date(
        (<HTMLInputElement>document.querySelector(`#dfin-${id}`)).value
      );
      edutoAdd.dateIni = new Date(
        (<HTMLInputElement>document.querySelector(`#dini-${id}`)).value
      );
      this.eduService.updateEducation(edutoAdd).subscribe(() => {
        this.eduService.getEducation().subscribe((education) => {
          this.educations = education;
          this.switch = false;
        });
      });
    }
  }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.eduService.getEducation().subscribe((education) => {
      this.educations = education;
    });
  }
}
