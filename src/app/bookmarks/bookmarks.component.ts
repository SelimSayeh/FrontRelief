import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { BookmarkService } from '../bookmark.service';
import { Bookmark } from '../bookmark';
import {MatTableDataSource} from '@angular/material/table';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  displayedColumns : string[] = ['videoName'];
  bookmarks:Bookmark[] =[];
  dataSource: MatTableDataSource<Bookmark>;
  @ViewChild(MatPaginator) paginator: MatPaginator;//my Bottom Paginator
  @Input() changing: Subject<any>;
  @Output() changeVideoEvent = new EventEmitter<any>();

  constructor(private getBookmars:BookmarkService) { 

  }

  ngOnInit(): void {
    
    this.changing.subscribe(v => { 
      this.bookmarks.unshift(v)
      this.dataSource.data=this.bookmarks
    });
    this.getBookmars.getBookmarks().subscribe((result:any) => {
      this.bookmarks=result.bookmark
      this.dataSource = new MatTableDataSource(result.bookmark);
      this.dataSource.paginator = this.paginator;
    })
  }

  callParent(id:any) {
    this.changeVideoEvent.emit(id);
  }
 
}
