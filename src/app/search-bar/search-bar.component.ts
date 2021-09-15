import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HistoryService } from '../history.service'; 
import { History } from '../history';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm = this.formBuilder.group({
    videoURL: '',
  });
  @Output() addVideoBookmarkEvent = new EventEmitter<any>();
  @Output() newVideoEvent = new EventEmitter<any>();
  @Input() changing: Subject<any>;
  id:string
  sendToChild: string;  
    historylist: History[];
    video : any ;
  constructor(
    private historyservice:HistoryService, 
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ){}
  ngOnInit(): void {
    
    this.changing.subscribe(v => { 
      this.video=v
    });
  }

  
  onSubmit(){
    const sendcustomURL = this.searchForm.value.videoURL
        ,pos = sendcustomURL.indexOf("v="),idLength=11;
        
    if (pos != -1){
      this.id = sendcustomURL.substr(pos+2,idLength)
    }
    
    this.historyservice.getVideoInfo(this.id).subscribe((videoDetails:any)=>{
      
      if(videoDetails.items.length!=0){
         this.video={
          videoName:videoDetails.items[0].snippet.title,
          videoURL:this.id
        }
        this.historyservice.postHistory(this.video).subscribe(data=>{
          this.callParent(this.video)
        })
      }
      else{
        this.toastr.error('Video Not Found');

      }
    })
    
    
     
  }

  callParent(value:any) {
    this.newVideoEvent.emit(value);
  }

  addBookmark(value:any){
    this.addVideoBookmarkEvent.emit(value);
  }
}