import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HopeProjectComponent } from './hope-project/hope-project.component';
import { LandingComponent } from './landing/landing.component';
import { SoupWagonComponent } from './soup-wagon/soup-wagon.component';
import { TheCommunityComponent } from './the-community/the-community.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingComponent },
  { path: 'hopeproject', component: HopeProjectComponent},
  { path:'soupwagon', component: SoupWagonComponent },
  { path: 'thecommunity', component: TheCommunityComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const routingComponents = [HopeProjectComponent, LandingComponent, SoupWagonComponent, TheCommunityComponent]