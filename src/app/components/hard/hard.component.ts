import { Component, OnInit } from '@angular/core';
import { Hardskill } from 'src/app/models/Hardskill';
import { AuthService } from 'src/app/services/auth.service';
import { HardSkillsService } from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css'],
})
export class HardComponent implements OnInit {
  hardskills: Hardskill[] = []
  isLogged: boolean = false;

  constructor(private hardService: HardSkillsService, private authService: AuthService) {}

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
    this.isLogged = this.authService.isAuthenticated();
    this.hardService.getHardSkills().subscribe((skills) => {
      this.hardskills = skills;
    });
  }
}
