import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import SampleData from './sample_data.json';

@Injectable({
  providedIn: 'root'
})
export class UrlManagerService {

  constructor(private http: HttpClient) {
  }

  fGet(url: string): Observable<any> {
    return this.http.get(url);
  }

  fPost(payload: any): Observable<any> {
    const url = '/api/submit';
    return this.http.post(url, payload);
  }

  fGetJsonData() {
    return SampleData;
  }

}
