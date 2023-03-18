import { Component, OnInit } from '@angular/core';
import { Hardskill } from 'src/app/models/Hardskill';
import { HardSkillsService } from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css'],
})
export class HardComponent implements OnInit {
  hardskills: Hardskill[] = []

  constructor(private hardService: HardSkillsService) {}

  addHardSkill(hard: Hardskill){
    this.hardskills.push(hard);
  }

  deleteHardSkill(id: number){
    this.hardskills = this.hardskills.filter((skill) => skill.id !== id);
  }

  updateHardSkill(hard: Hardskill){
    const hardToUpdate = this.hardskills.find(e => e.id === hard.id);
    if(hardToUpdate){
      hardToUpdate.skillname = hard.skillname;
    }
  }

  ngOnInit() {
    this.hardService.getHardSkills().subscribe((skills) => {
      this.hardskills = skills;
    });
  }
}
