import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addData: any; 

  createform = new FormGroup({ 
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    skillset: new FormControl('', Validators.required),
    hobby: new FormControl('', Validators.required),
  })

  CreateUser(){
    if(this.createform.valid){
      this.service.create(this.createform.value).subscribe( item => {
        this.addData = item;
        if(this.addData){
          alertify.success("New user created"); 
          this.router.navigate(['user'])
        } else {
          alertify.error("Create failed");
        }
      })
    }
  } 

  close(){
    this.router.navigate(['user']);
  }

}
