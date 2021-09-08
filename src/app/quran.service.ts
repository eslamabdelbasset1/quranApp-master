import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuranService {
  audioSrc:any = "https://server6.mp3quran.net/qtm/001.mp3"
  audioPlayer:any;

  constructor(private _HttpClient:HttpClient) {}
  configUrl: any = 'https://qurani-api.herokuapp.com/api/reciters?fbclid=IwAR1mumgQWcDTs5f5NUSCVxMAyQ_sG16l5XU4iHGAX3BwF432-CNB4HXK5vc';
  getAllQuraa(): Observable<any> {
    return this._HttpClient.get(this.configUrl);
  }
  getAllSour(id: any): Observable<any> {
    return this._HttpClient.get(
      `https://qurani-api.herokuapp.com/api/reciters/${id}`
    );
  }

}
