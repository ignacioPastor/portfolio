import { ContentService } from './../shared/services/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit() {
  }

}
