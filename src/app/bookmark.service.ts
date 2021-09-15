import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookmark } from './bookmark';
@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  url="http://192.168.15.1:8000";
  constructor(private http:HttpClient) { }
  getBookmarks(){
    return this.http.get<Bookmark[]>(this.url+"/api/showbookmark");
  }

  postBookmark(bookmark :Bookmark){
    return this.http.post(this.url+"/api/addbookmark",bookmark);
}
}
