import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { V1Component } from './v1/v1.component';
import { V2Component } from './v2/v2.component';
import { WorkComponent } from './v2/work/work.component';
import { HomeComponent } from './v2/home/home.component';
import { EducationComponent } from './v2/education/education.component';
import { UnknownRouteComponent } from './v2/unknown-route/unknown-route.component';
import { AboutComponent } from './v2/about/about.component';
import { ConnectComponent } from './v2/connect/connect.component';
import { StarsComponent } from './v2/stars/stars.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 0],
};

const routes: Routes = [
  { path: '', component: V2Component },
  { path: 'v2', component: HomeComponent },
  { path: 'v1', component: V1Component },
  { path: 'v2/home', component: HomeComponent},
  { path: 'v2/work', component: WorkComponent },
  { path: 'v2/education', component: EducationComponent},
  { path: 'v2/about', component: AboutComponent},
  { path: 'v2/connect', component: ConnectComponent},
  { path: 'v2/stars', component: StarsComponent},
  { path: '**', component: UnknownRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
