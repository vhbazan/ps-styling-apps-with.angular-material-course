import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { ContactManagerComponent } from './contact-manager.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


const routes: Routes = [
  { path: '',  component: ContactManagerComponent, children: [
    { path: '', component: MainContentComponent }
  ] },
  { path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [
    ContactManagerComponent,
    ToolBarComponent,
    MainContentComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactManagerModule { }
