import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Softskill } from 'src/app/models/Softskill';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-edit-soft',
  templateUrl: './edit-soft.component.html',
  styleUrls: ['./edit-soft.component.css'],
})
export class EditSoftComponent implements OnInit {
  softskills: Softskill[] = [];
  newSoftSkill: string = '';
  newSoftSkillPorcentage: number = 0;
  @Output() addSoftSkillEvent = new EventEmitter<Softskill>();
  @Output() deleteSoftSkillEvent = new EventEmitter<number>();
  @Output() updateSoftSkillEvent = new EventEmitter<Softskill>();

  constructor(private softSkillService: SoftSkillsService) {}

  ngOnInit() {
    this.softSkillService
      .getSoftSkills()
      .subscribe((skills) => (this.softskills = skills));
  }

  deleteSoftSkill(id: number) {
    this.deleteSoftSkillEvent.emit(id)
    this.softskills = this.softskills.filter((skill) => skill.id != id);
  }

  updateSoftSkill(softskill: Softskill){
    this.updateSoftSkillEvent.emit(softskill);
  }

  addSoftSkill() {
    const softSkillToAdd = new Softskill();
    softSkillToAdd.porcentage = this.newSoftSkillPorcentage;
    softSkillToAdd.skillname = this.newSoftSkill;
    this.softSkillService.addSoftskill(softSkillToAdd).subscribe((sk) => {
      this.addSoftSkillEvent.emit(sk);
      this.softSkillService
        .getSoftSkills()
        .subscribe((e) => (this.softskills = e));
    });
  }
}
