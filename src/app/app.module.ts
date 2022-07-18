import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
//
//Flex Box Import Module//
import { FlexLayoutModule } from '@angular/flex-layout';
//

//
import { YouTubePlayerModule } from '@angular/youtube-player';
//

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { LandingPageContentComponent } from './landing-page-content/landing-page-content.component';
import { FooterComponent } from './footer/footer.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

// Google Maps API Module
import { GoogleMapsModule } from '@angular/google-maps';
//

//
// AGM core modules
//import { AgmCoreModule } from '@agm/core';
//

//
// HTTP client and jsonModule
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';


//
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    LandingPageContentComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    YouTubePlayerModule, 
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    TooltipModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
