import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  userForm: any;
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName:new FormControl('', [Validators.required, Validators.minLength(3)]),
      mailId: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      address: new FormControl('')
    });
    this.setUserData();
  }

  userCreation(){
    //console.log(this.userForm.invalid)
   console.log(this.userForm.get('userName'));
  }

  setUserData(){
    let user = {userName:'venki', mailId:"venkram08@gmail.com",mobileNumber:'8639368139', address:'hyd' }
      this.userForm.setValue(user)
  }
}
