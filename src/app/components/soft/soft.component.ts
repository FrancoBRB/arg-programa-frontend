import { Component, OnInit } from '@angular/core';
import { Softskill } from 'src/app/models/Softskill';
import { AuthService } from 'src/app/services/auth.service';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  softskills: Softskill[] = [];
  isLogged: boolean = false;

  constructor(private softService: SoftSkillsService, private authService: AuthService) { }

  addSoftSkill(soft: Softskill){
    this.softskills.push(soft);
  }

  deleteSoftSkill(id:number){
    this.softskills = this.softskills.filter((skill) => skill.id != id);
  }

  updateSoftSkill(soft: Softskill){
    const softToUpdate = this.softskills.find(e => e.id === soft.id);
    if(softToUpdate){
      softToUpdate.porcentage = soft.porcentage;
      softToUpdate.skillname = soft.skillname;
    }
  }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.softService.getSoftSkills().subscribe((softskill)=>{
      this.softskills = softskill;
    })
  }

}
