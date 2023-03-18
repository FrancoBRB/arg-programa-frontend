import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Hardskill } from 'src/app/models/Hardskill';
import { HardSkillsService } from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-child-hardskill',
  templateUrl: './child-hardskill.component.html',
  styleUrls: ['./child-hardskill.component.css'],
})
export class ChildHardskillComponent implements OnInit {
  @Input() skill: Hardskill = new Hardskill();
  newName: string = '';
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<Hardskill>();

  constructor(private hardskillService: HardSkillsService) {}

  ngOnInit() {}

  editHardSkill() {
    this.skill.skillname = this.newName;
    this.hardskillService
      .editHardSkill(this.skill)
      .subscribe((e) => this.updateEvent.emit(e));
  }

  deleteHardSkill() {
    if (this.skill.id) {
      this.hardskillService.deleteHardSkill(this.skill.id).subscribe();
      this.deleteEvent.emit(this.skill.id);
    }
  }
}
