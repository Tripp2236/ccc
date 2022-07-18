import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HopeProjectComponent } from './hope-project/hope-project.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingComponent },
  {path: 'hopeproject', component: HopeProjectComponent},
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const routingComponents = [HopeProjectComponent, LandingComponent]