import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { V1Component } from './v1/v1.component';
import { V2Component } from './v2/v2.component';
import { HomeComponent } from './v2/home/home.component';
import { TileComponent } from './v2/tile/tile.component';
import { WorkComponent } from './v2/work/work.component';
import { NavComponent } from './v2/nav/nav.component';
import { BorderComponent } from './v2/border/border.component';
import { WorkTileComponent } from './v2/work-tile/work-tile.component';
import { EducationComponent } from './v2/education/education.component';
import { UnknownRouteComponent } from './v2/unknown-route/unknown-route.component';
import { AboutComponent } from './v2/about/about.component';
import { PageTitleComponent } from './v2/page-title/page-title.component';
import { ConnectComponent } from './v2/connect/connect.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'

import { RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  declarations: [
    AppComponent,
    V1Component,
    V2Component,
    HomeComponent,
    TileComponent,
    WorkComponent,
    NavComponent,
    BorderComponent,
    WorkTileComponent,
    EducationComponent,
    UnknownRouteComponent,
    AboutComponent,
    PageTitleComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideAnimations(),
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcPYEcpAAAAAKGbAwbbbd_SvY65srwzeXUP7cdn' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
