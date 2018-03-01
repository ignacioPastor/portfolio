import { Component, OnInit } from '@angular/core';
import { ContentService } from './../shared/services/content.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit() {
  }

}
