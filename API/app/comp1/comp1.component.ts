import { Component, OnInit } from '@angular/core';
import { DataSahreService } from '../data-sahre.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private dataService:DataSahreService) { }
  username:any;
  ngOnInit(): void {

  }

  sendUsername(){
    this.dataService.setUsername(this.username);
  }

}
