import { Component, OnInit } from '@angular/core';
//import  {Tile}  from '../Interfaces/LandingPageContent';
// import {subHeadings} from '../Interfaces/LandingPageContent';

//import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-landing-page-content',
  templateUrl: './landing-page-content.component.html',
  styleUrls: ['./landing-page-content.component.css']
})





// text content for secondary headings for landing page content page
// I wanted to use an interface & static typing to practice as well as 
// placing the sub headings in a responsive way using T.S


export class LandingPageContentComponent implements OnInit{

  // tileHeadings: Tile[] = [
  //   {
  //     id:1,
  //     text: 'Guided By Grace', cols: 2, rows: 2
  //   },
  //   {
  //     id: 2,
  //     text:'Loving Others:', cols: 2, rows: 2
  //   },
  //   {
  //     id: 3,
  //     text:'Our Mission', cols: 2, rows: 2
  //   },
  //   {
  //     id: 4,
  //     text: 'Our Desire', cols: 2, rows: 2
  //   }
  // ];


  // text content for secondary headings for landing page content page
  // I wanted to use an interface & static typing to practice as well as 
  // placing the sub headings in a responsive way using T.S

 

  // secondaryHeadings: subHeadings[] = [
  //    {
  //     id: 0,
  //     info: 
  //     'To share the LOVE and Grace of Jesus through the cross and see lives transformed by the POWER of God.  To know there is life and peace in a world full of chaos.',
  //       cols: 1,
  //       rows: 2 
     
  //    },
  //    {
  //     id: 1,
  //     info: 
  //     'To reach into our community and share the life giving truths of the BIBLE with a generation that does not know God, but longs to be known by Him', 
  //       cols: 1, 
  //       rows: 1 
  //    },
  //    {
  //     id:2,
  //     text: 'We are commissioned to share the gospel of Jesus christ with out neighbors.  We are committed to preaching and teaching the word of God.  We are concerned about seeing belivers grow into passionate followers of Jesus.  We are compelled by the love of Christ to give outselves and our resources to reach out to out community and world with the gospel.  We are compassionate towards the suffering and those in need.',
  //     cols: 1,
  //     rows: 1
  //    }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
