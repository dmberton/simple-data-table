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

  /**
   * We can get the JSON data via http.get(./sample_data.json) as well.
   * This would mimic better a real case scenario where the data is coming from an external source.
   * But for the exercise this is just static.
   * Also getting the data via web would still be a one time shot and we would have to wait for it to return.
   * It would probably be better to have an endpoint with paramters for slice/paging the data so that the data returned
   * is small and probably faster to return. In that case instead of slice the array in the client, we would be calling 
   *  the api on each page action/scroll to bottom to retrieve the data.
   */
  fGetJsonData() {
    return SampleData;
  }

}
