import { Component, OnInit } from '@angular/core';
import { DataSahreService } from '../data-sahre.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private dataService: DataSahreService) { }
  username:any;
  ngOnInit(): void {
  }
  getUserData(){
    this.username = this.dataService.getUsername();
  }

}
