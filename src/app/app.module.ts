import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'contactmanager',  loadChildren: () => import('./contact-manager/contact-manager.module').then(m => m.ContactManagerModule) },
  { path: 'demo',  loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: '**', redirectTo: 'contactmanager'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,

    SwiperModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
