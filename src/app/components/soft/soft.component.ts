import { Component, OnInit } from '@angular/core';
import { softSkill, SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  softskills: softSkill[] = [];

  constructor(private softService: SoftSkillsService) { }

  typede(r: any){
    return typeof(r);
  }

  ngOnInit() {
    this.softService.getSoftSkills().subscribe((softskill)=>{
      this.softskills = softskill;
    })
  }

}
