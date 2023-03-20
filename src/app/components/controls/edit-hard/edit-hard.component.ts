import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hardskill } from 'src/app/models/Hardskill';
import { HardSkillsService } from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-edit-hard',
  templateUrl: './edit-hard.component.html',
  styleUrls: ['./edit-hard.component.css'],
})
export class EditHardComponent implements OnInit {
  newHardSkill: string = '';
  hardskills: Hardskill[] = [];
  returnData: Hardskill = new Hardskill();
  alert: boolean = false;
  @Output() newHardSkillEvent = new EventEmitter<Hardskill>();
  @Output() deleteHardSkillEvent = new EventEmitter<number>();
  @Output() updateHardSkillEvent = new EventEmitter<Hardskill>();

  constructor(private hardService: HardSkillsService) {}

  ngOnInit() {
    this.hardService.getHardSkills().subscribe((skills) => {
      this.hardskills = skills;
    });
  }

  deleteHardSkill(id: number) {
    this.deleteHardSkillEvent.emit(id);
    this.hardskills = this.hardskills.filter((skill) => skill.id !== id);
  }

  updateHardSkill(hard: Hardskill){
    this.updateHardSkillEvent.emit(hard);
  }

  onSubmit(form:any) {
    if(!form.value.newHardSkill){
      this.alert = true;
      return;
    }
    this.alert = false;
    this.newHardSkill = "";
    const hardSkillToAdd = new Hardskill();
    hardSkillToAdd.skillname = form.value.newHardSkill;
    this.hardService.addHardSkill(hardSkillToAdd).subscribe((hs) => {
      this.newHardSkillEvent.emit(hs);
      this.hardService.getHardSkills().subscribe((e) => (this.hardskills = e));
    }); 
  }
}
