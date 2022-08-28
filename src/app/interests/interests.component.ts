import { Component, OnInit } from '@angular/core';
import interests from '../../assets/json/interests.json';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: any = interests;
  
  constructor() { }

  ngOnInit(): void {
  }

}
