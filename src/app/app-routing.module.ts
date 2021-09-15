import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { Router,RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes : Routes=[
  {
    path:"",
    component:SearchBarComponent
  },
  {
    path : 'bookmarks',
    component : BookmarksComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
