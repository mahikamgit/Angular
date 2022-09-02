import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'productMangement';
  age:number=23;
  list:string[] = ['EQUTE',''];
  list1:number[] = [];
  time:number  = 14; 
  f1(age:any, sal:any =20000){
    console.log(age);
    console.log(sal)
  }
 
  constructor(private router:Router){
    this.f1(12,30000);
    console.log(this.getFinalPrice(20000));
  }

  getFinalPrice(totalPrice:number, discountAmount:number = 500){
   return totalPrice - discountAmount;
  }

  gotoUsersPage(){
    this.router.navigate(['/users'])
  }
  gotoAdminPage(){
    this.router.navigate(['/admins'])

  }
  gotoMyProducts(){
    this.router.navigate(['/myProducts'])

  }

  goToPosts(){
    this.router.navigate(['/posts'])
  }
  
}
