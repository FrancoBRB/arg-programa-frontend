import { Component, OnInit } from '@angular/core';
import { ProyectsService, Project } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProyectsService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe((project)=>{
      this.projects = project;
    })
  }

}
