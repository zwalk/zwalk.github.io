import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { V1Component } from './v1/v1.component';
import { V2Component } from './v2/v2.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 0]
};

const routes: Routes = [
  { path: '', component: V2Component },
  { path: 'v2', component: V2Component },
  { path: 'v1', component: V1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
