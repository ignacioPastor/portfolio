import { ContentService } from './../shared/services/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myProjects: any[] = [];

  constructor(public contentService: ContentService) { }

  ngOnInit() {
  }

}
