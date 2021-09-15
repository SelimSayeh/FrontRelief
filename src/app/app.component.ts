import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  newVideoSubject: Subject<any> = new Subject();
  newVideoBookmarkSubject: Subject<any> = new Subject();
  chnageVideoSubject: Subject<any> = new Subject();
  display : boolean = true;

  addNewVideo(video:any){
    this.newVideoSubject.next(video)
  }

  addBookmark(video:any){
    this.newVideoBookmarkSubject.next(video)
  }
  changeVideo(id:any){
    this.chnageVideoSubject.next(id)
  }
  displayHistory(){
    this.display = true;
  }
  displayBookmark(){
    this.display = false;
  }
}
