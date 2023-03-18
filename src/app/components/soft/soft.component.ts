import { Component, OnInit } from '@angular/core';
import { Softskill } from 'src/app/models/Softskill';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  softskills: Softskill[] = [];

  constructor(private softService: SoftSkillsService) { }

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
    this.softService.getSoftSkills().subscribe((softskill)=>{
      this.softskills = softskill;
    })
  }

}
