import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HistoryService } from './../history.service';
import { History } from '../history'
import { Subject } from 'rxjs';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit{

  displayedColumns : string[] = ['videoName'];
  @ViewChild(MatPaginator) paginator: MatPaginator;//my Bottom Paginator
  history:History[] =[];
  dataSource: MatTableDataSource<History>;
  @Input() changing: Subject<any>;
  @Output() changeVideoEvent = new EventEmitter<any>();

  constructor(private getHistory:HistoryService){}



  
  ngOnInit()
  {
    this.changing.subscribe(v => { 
      
      this.history.unshift(v)
      this.dataSource.data=this.history
    });
    this.getHistory.getHistory().subscribe( (result:any) =>{
      this.history=result.history
      this.dataSource = new MatTableDataSource(result.history);
      this.dataSource.paginator = this.paginator;
     })
  }


  callParent(video:any) {
    this.changeVideoEvent.emit(video);
  }
 
}

