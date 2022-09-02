import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }
  get(url: any, params?: any[]) {
    if (params) {
      return this.http.get(url, params[0])

    } else {
      return this.http.get(url);

    }
  }
  post(url:any, body:any){
    return this.http.post(url, body);
  }
}
