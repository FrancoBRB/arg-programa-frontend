import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Softskill } from 'src/app/models/Softskill';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-child-softskill',
  templateUrl: './child-softskill.component.html',
  styleUrls: ['./child-softskill.component.css'],
})
export class ChildSoftskillComponent implements OnInit {
  @Input() skill: Softskill = new Softskill();
  newName: string = '';
  newSoftPorcentage: number = 0;
  alert: boolean = false;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<Softskill>();

  constructor(private softSkillService: SoftSkillsService) {}

  ngOnInit() {}

  onSubmit(form: any) {
    if(!form.value.newSoftName){
      this.alert = true;
      return;
    }
    this.alert = false;
    this.skill.skillname = form.value.newSoftName;
    this.skill.porcentage = form.value.newSoftPorcentage;
    this.softSkillService
      .editSoftSkill(this.skill)
      .subscribe((e) => this.updateEvent.emit(e));
    this.newName = "";
    this.newSoftPorcentage = 0;
  }

  deleteSoftSkill() {
    if (this.skill.id) {
      this.softSkillService.deleteSoftSkill(this.skill.id).subscribe();
      this.deleteEvent.emit(this.skill.id);
    }
  }
}
