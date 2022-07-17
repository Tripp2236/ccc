import { Component, OnInit } from '@angular/core';

// google maps and http client callbacks///
///////////////////////////////////////////
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
///////////////////////////////////////////
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) { 

      this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBRHNxzfBb_E22Lc0TmJHrf1JtHGmRKUqM', 'callback')
                        .pipe(map(() => true), catchError( ()=> of(false))
                        );

   }

  ngOnInit(): void {
  }

}
