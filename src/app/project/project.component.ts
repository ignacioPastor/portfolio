import { TypeProject } from './../shared/enumerators/TypeProject';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project;
  typeProject = TypeProject;

  constructor() { }

  ngOnInit() {
  }

  getWidthImage() {
    if (TypeProject.Web == this.project.type ) return '100%';
  }

}
