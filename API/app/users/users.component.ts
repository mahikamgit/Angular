import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }
  usersList = [{name:'venki', age:30, address:'akdkgdk'},{name:'venki2', age:29, address:'aasskdkgdk'}]
  ngOnInit(): void {
  }
  gotoUSerInfo(user:any){
    this.router.navigate(['/userInfo',user.name])
  }
  goToAddUser() {
    this.router.navigate(['/create-user'])

  }

}
