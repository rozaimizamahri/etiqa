import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private service: UserService, @Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
    this.GetExistData(this.data.id)
  }

  editData: any;
  savedata: any;

  updateform = new FormGroup({
    id: new FormControl({value:"", disabled:true}),
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    skillset: new FormControl('', Validators.required),
    hobby: new FormControl('', Validators.required),
  })

  UpdateUser(){
    if(this.updateform.valid){
      this.service.update(this.data.id, this.updateform.value).subscribe( item => {
        this.savedata = item;
        if(this.savedata){
          alertify.success("Update success");
          this.ref.close();
        } else {
          alertify.error("Update failed");
        }
      })
    }
  } 

  GetExistData(id: any){
    this.service.view(id).subscribe( item => {
      this.editData = item; 
      if(this.editData !== null){
        this.updateform.setValue({
          id: this.editData.id,
          username: this.editData.username,
          name: this.editData.name,
          email: this.editData.email,
          phone: this.editData.phone,
          skillset: this.editData.skillset,
          hobby: this.editData.hobby
        })
      }
    })
  }

}
