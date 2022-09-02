import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  userName:string ='Rajesh';
  imageUrl:string = '../../assets/image1.jfif';
  mobilenumber!:string;
  ngOnInit(): void {
  }

  changeUSerName(){
    this.userName ="venkatesh";
  }

  showMorning(){
    this.imageUrl = '../../assets/image1.jfif'
  }

  showEveining(){
    this.imageUrl = '../../assets/image2.jfif'

  }
  showData(){
    console.log(this.mobilenumber)
  }
  updateData(){
    this.mobilenumber ='123456789'
  }
}
