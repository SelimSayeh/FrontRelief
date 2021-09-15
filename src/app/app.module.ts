import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { MatTableModule } from '@angular/material/table' 
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms'
import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule} from '@angular/material/card';  
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,//SearchBar Component
    VideoViewComponent,//VideoView Component
    HistoryComponent,//History Component
    BookmarksComponent,//Bookmarks Component
    

  ],
  imports: [
    BrowserModule,
    MatToolbarModule, 
    BrowserAnimationsModule, 
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDividerModule,
    FormsModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
