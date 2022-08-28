import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import experiences from '../../assets/json/experience.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, AfterViewInit {

  experiences: any = experiences;
  check:number = 0;
  constructor(private render : Renderer2) { }
  
  @ViewChildren('experienceCard')
  experienceElement: QueryList<ElementRef> = new QueryList;

  ngAfterViewInit(): void {
    const elements = this.experienceElement.toArray();
    for(let i=1;i<elements.length;i++) {
      this.render.addClass(elements[i].nativeElement, 'd-none');
    }
  }

  ngOnInit(): void {
  }

  crousal() {
    console.log("printingg...crousal")
    const elements = this.experienceElement.toArray();
    let countCheck = 0;
    for(let i=0;i<elements.length;i++) {
      const classes = elements[i].nativeElement.getAttribute('class');
      if(!classes.includes('d-none')) {
        countCheck = i+1;
        this.render.addClass(elements[i].nativeElement, 'd-none');
      }
    }
    if(countCheck == elements.length) {
      this.render.removeClass(elements[0].nativeElement, 'd-none');
    } else {
      this.render.removeClass(elements[countCheck].nativeElement, 'd-none');
    }
    this.ngOnInit();
  }

}
