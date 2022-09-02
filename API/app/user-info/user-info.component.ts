import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private activatRoute:ActivatedRoute) { }
  name:any;
  ngOnInit(): void {
    this.name = this.activatRoute.snapshot.params['username'];
  }

}
