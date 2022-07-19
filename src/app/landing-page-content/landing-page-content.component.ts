import { Component, OnInit } from '@angular/core';
import  {Tile}  from '../Interfaces/LandingPageContent';



@Component({
  selector: 'app-landing-page-content',
  templateUrl: './landing-page-content.component.html',
  styleUrls: ['./landing-page-content.component.css']
})





// text content for secondary headings for landing page content page
// I wanted to use an interface & static typing to practice as well as 
// placing the sub headings in a responsive way using T.S


export class LandingPageContentComponent implements OnInit {

  tileHeadings: Tile[] = [
    {
      text: 'Guided By Grace', cols: 1, rows: 2
    },
    {
      text:'Loving Others:', cols: 3, rows: 1
    },
  ];


  // text content for secondary headings for landing page content page
  // I wanted to use an interface & static typing to practice as well as 
  // placing the sub headings in a responsive way using T.S

  // secondaryHeadings: subHeadings = [
  //   {},
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
