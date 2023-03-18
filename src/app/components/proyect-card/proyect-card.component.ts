import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() updateProjectEvent = new EventEmitter<Project>();
  @Output() deleteProjectEvent = new EventEmitter<number>();

  constructor(private projectService: ProyectsService) {}

  updateProject() {
    const projectToAdd = new Project();
    projectToAdd.id = this.id;
    projectToAdd.desc = this.newDesc;
    projectToAdd.img = this.newImg;
    projectToAdd.name = this.newName;
    projectToAdd.repo = this.newRepo;
    this.projectService
      .updateProject(projectToAdd)
      .subscribe((e) => this.updateProjectEvent.emit(e));
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
