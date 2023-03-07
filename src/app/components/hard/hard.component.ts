import { Component, OnInit } from '@angular/core';
import {
  hardSkill,
  HardSkillsService,
} from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css'],
})
export class HardComponent implements OnInit {
  hardskills: hardSkill[] = [];

  constructor(private hardService: HardSkillsService) {}

  ngOnInit() {
    this.hardService.getSkills().subscribe((skills) => {
      this.hardskills = skills;
    });
  }
}
