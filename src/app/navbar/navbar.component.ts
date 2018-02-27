import { ContentService } from './../shared/services/content.service';
import { Component, OnInit } from '@angular/core';
import { LangType } from './../shared/enumerators/LangType';
import { MyStrings } from './../shared/enumerators/MyStrings';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  langType = LangType;
  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
  }

  onClickLanguaje(lang: number) {
    localStorage.setItem(MyStrings.LangKey, lang.toString());
    this.contentService.languageChoosen = lang;
  }

}

