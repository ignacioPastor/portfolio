import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill: {logo, content};
  @Output() showContent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitContentSkill() {
    this.showContent.emit(this.skill.content);
  }

}
