import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
})
export class ProyectCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() desc: string = '';
  @Input() img: string = '';
  @Input() repo: string = '';
  @Input() id: number | null = null;
  newImg: string = '';
  newDesc: string = '';
  newName: string = '';
  newRepo: string = '';
  alertImg: boolean = false;
  alertDesc: boolean = false;
  alertName: boolean = false;
  alertRepo: boolean = false;
  @Output() updateProjectEvent = new EventEmitter<Project>();
  @Output() deleteProjectEvent = new EventEmitter<number>();
  @ViewChild('closeButton') closeButton: any;

  constructor(private projectService: ProyectsService) {}

  validate(form: any): boolean {
    let isValid = true;
    if (!form.value.imgToAdd) {
      this.alertImg = true;
      isValid = false;
    }
    if (!form.value.nameToAdd) {
      this.alertName = true;
      isValid = false;
    }
    if (!form.value.descToAdd) {
      this.alertDesc = true;
      isValid = false;
    }
    if (!form.value.repoToAdd) {
      this.alertRepo = true;
      isValid = false;
    }
    return isValid;
  }

  resetAlerts() {
    this.alertDesc = false;
    this.alertImg = false;
    this.alertName = false;
    this.alertRepo = false;
  }

  onSubmit(form: any) {
    if (this.validate(form)) {
      const projectToAdd = new Project();
      projectToAdd.id = this.id;
      projectToAdd.desc = this.newDesc;
      projectToAdd.img = this.newImg;
      projectToAdd.name = this.newName;
      projectToAdd.repo = this.newRepo;
      this.projectService
        .updateProject(projectToAdd)
        .subscribe((e) => this.updateProjectEvent.emit(e));
      this.resetAlerts();
      this.closeButton.nativeElement.click();
    }
  }

  deleteProject() {
    if (this.id) {
      this.deleteProjectEvent.emit(this.id);
      this.projectService.deleteProject(this.id).subscribe();
    }
  }

  ngOnInit() {
    this.newDesc = this.desc;
    this.newImg = this.img;
    this.newRepo = this.repo;
    this.newName = this.name;
  }
}
