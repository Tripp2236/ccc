import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hope-project',
  templateUrl: './hope-project.component.html',
  styleUrls: ['./hope-project.component.css']
})
export class HopeProjectComponent implements OnInit {

  testing: string = 'Hope Project is working!';


  constructor() {
    console.log(this.testing);
   }

  ngOnInit(): void {
  }

}
