import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef, EventEmitter, Output, AfterViewInit, OnDestroy } from '@angular/core';
import {YouTubePlayerModule} from "@angular/youtube-player";
import { BookmarkService } from '../bookmark.service';
import { Bookmark } from './../bookmark';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})

export class VideoViewComponent implements AfterViewInit, OnDestroy{
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;;
  @Input() video: any;
  @Output() addToBookmark = new EventEmitter<any>();
 
  videoWidth: number | undefined;
  videoHeight: number | undefined;
  
  constructor(private _changeDetectorRef: ChangeDetectorRef, private bookmarkservice : BookmarkService,
    private toastr: ToastrService) {

  }



  ngAfterViewInit(): void {
    
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
      this.videoWidth = 600;   
      this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  savebookmark() : void {
    this.bookmarkservice.postBookmark(this.video).subscribe(
      data=>{
      this.callParent(this.video)
      this.toastr.success("Video successfully added to bookmark");
    },
    err=>{
      if(err.status==400){

        this.toastr.error(err.error.message);
      }
    }
    )
  }

  callParent(video:any) {
    this.addToBookmark.emit(video);
  }
}
