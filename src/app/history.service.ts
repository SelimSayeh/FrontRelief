import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { History } from './history';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

url="http://192.168.15.1:8000";


  constructor(private http:HttpClient) { }

  getHistory(){
    return this.http.get<History[]>(this.url+"/api/showhistory");
  }
  
  postHistory(history :History){
      return this.http.post(this.url+"/api/addhistory",history);
  }

  getVideoInfo(id:string){
    return this.http.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${environment.youtubeApiKey}`)
  }
} 
