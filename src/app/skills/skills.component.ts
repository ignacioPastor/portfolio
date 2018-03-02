import { Component, OnInit } from '@angular/core';
import { ContentService } from './../shared/services/content.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  contentSkillToShow: string;

  constructor(public contentService: ContentService) { }

  ngOnInit() {
  }

  showContentSkill(contentSkill: string) {
    this.contentSkillToShow = contentSkill;
  }

  onChangeLanguage(lang: string) {
    this.contentSkillToShow = '';
  }

}
