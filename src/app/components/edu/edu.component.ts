import { Component, OnInit } from '@angular/core';
import { edu, EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css'],
})
export class EduComponent implements OnInit {
  educations: edu[] = [];

  constructor(private eduService: EducationService) {}

  ngOnInit() {
    this.eduService.getEducation().subscribe((education) => {
      this.educations = education;
    });
  }
}
