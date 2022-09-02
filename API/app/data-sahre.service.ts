import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class DataSahreService {
  username:any;
  constructor() { }
  setUsername(name:any){
   this.username = name;
  }
  getUsername(){
    return this.username;
  }
  findCurrentDate(){
    console.log(new Date())
  }
}
