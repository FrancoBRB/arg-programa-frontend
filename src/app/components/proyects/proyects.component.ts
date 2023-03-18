import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  projects: Project[] = [];
  newImg: string = '';
  newName: string = '';
  newDesc: string = '';
  newRepo: string = '';

  constructor(private projectService: ProyectsService) {}

  updateProject(project: Project) {
    const projectToUpdate = this.projects.find((p) => p.id === project.id);
    if (projectToUpdate) {
      projectToUpdate.desc = project.desc;
      projectToUpdate.img = project.img;
      projectToUpdate.name = project.name;
      projectToUpdate.repo = project.repo;
    }
  }

  addProject() {
    const projectToAdd = new Project();
    projectToAdd.name = this.newName;
    projectToAdd.desc = this.newDesc;
    projectToAdd.repo = this.newRepo;
    projectToAdd.img = this.newImg;
    this.projectService
      .addProject(projectToAdd)
      .subscribe((e) => this.projects.push(e));
  }

  deleteProject(id: number) {
    console.log(id);
    this.projects = this.projects.filter((e) => e.id != id);
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((project) => {
      this.projects = project;
    });
  }
}
