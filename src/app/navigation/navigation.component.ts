import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

   


 constructor() {
 }

 menu!: MenuItem[];

  ngOnInit(): void {

    this.menu = [
      {
        label: 'Welcome',
        items: [{
          label: 'Love',
          icon: 'pi pi-fw pi-plus'
        }]
      },
      {
        label: 'The Church',
        icon: 'pi pi-fw pi-church'
      },
      {
        label: 'Community'
      },
      {
        label: 'Soup Wagon'
      },
      {
        label: 'The Hope Project'
      },
      {
        label: 'Contact'
      }
    ];

  }

}
