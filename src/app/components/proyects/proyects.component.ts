import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { AuthService } from 'src/app/services/auth.service';
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
  alertImg: boolean = false;
  alertName: boolean = false;
  alertDesc: boolean = false;
  alertRepo: boolean = false;
  @ViewChild('closeButton') closeButton: any;
  isLogged: boolean = false;

  constructor(private projectService: ProyectsService, private authService: AuthService) {}

  updateProject(project: Project) {
    const projectToUpdate = this.projects.find((p) => p.id === project.id);
    if (projectToUpdate) {
      projectToUpdate.desc = project.desc;
      projectToUpdate.img = project.img;
      projectToUpdate.name = project.name;
      projectToUpdate.repo = project.repo;
    }
  }

  validate(form: any): boolean {
    let isValid = true;
    if (!form.value.imgToAdd) {
      isValid = false;
      this.alertImg = true;
    }
    if (!form.value.nameToAdd) {
      isValid = false;
      this.alertName = true;
    }

    if (!form.value.descToAdd) {
      isValid = false;
      this.alertDesc = true;
    }

    if (!form.value.repoToAdd) {
      isValid = false;
      this.alertRepo = true;
    }
    return isValid;
  }

  resetAlerts() {
    this.alertDesc = false;
    this.alertImg = false;
    this.alertName = false;
    this.alertRepo = false;
  }

  resetInputs(){
    this.newName = "";
    this.newDesc = "";
    this.newRepo = "";
    this.newImg = "";
  }

  onSubmit(form: any) {
    if (this.validate(form)) {
      const projectToAdd = new Project();
      projectToAdd.name = this.newName;
      projectToAdd.desc = this.newDesc;
      projectToAdd.repo = this.newRepo;
      projectToAdd.img = this.newImg;
      this.projectService
        .addProject(projectToAdd)
        .subscribe((e) => this.projects.push(e));
      this.resetAlerts();
      this.resetInputs();
      this.closeButton.nativeElement.click();
    }
  }

  deleteProject(id: number) {
    console.log(id);
    this.projects = this.projects.filter((e) => e.id != id);
  }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.projectService.getProjects().subscribe((project) => {
      this.projects = project;
    });
  }
}
