import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import skills from '../../assets/json/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  skills: any = skills;

  constructor(private render: Renderer2) { }

  @ViewChildren('percentage')
  skillLevelElement: QueryList<ElementRef> = new QueryList;

  ngAfterViewInit(): void {
    const elements = this.skillLevelElement.toArray();
    let outerCount = 0;
    for(let i=0;i<this.skills.length;i++) {
      let skillLevel = this.skills[i].level;
      for(let i=1;i<=5;i++) {
        if(i > skillLevel) {
          outerCount++;
        } else {
          this.render.setStyle(elements[outerCount].nativeElement, 'background-color', '#426696');
          outerCount++;
        }
      }
    }
  }

  ngOnInit(): void {
  }

  downloadResume() {
    
  }
}
