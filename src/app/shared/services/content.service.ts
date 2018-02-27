import { LangType } from './../enumerators/LangType';
import { MyStrings } from './../enumerators/MyStrings';
import { Injectable } from '@angular/core';
import * as content_eng from './../../../assets/content_eng.json';
import * as content_spa from './../../../assets/content_spa.json';

@Injectable()
export class ContentService {
  languageChoosen;
  constructor() { }

  public getContent() {
    if (!this.languageChoosen) this.languageChoosen = localStorage.getItem(MyStrings.LangKey);
    if (!this.languageChoosen) this.languageChoosen = LangType.English;
    return this.chooseLanguage();
  }

  private chooseLanguage() {
    switch(this.languageChoosen) {
      case LangType.English: return content_eng;
      case LangType.Spanish: return content_spa;
    }
  }

  public isEnglish(): boolean {
    return this.languageChoosen == LangType.English;
  }

}
