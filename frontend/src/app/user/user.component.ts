import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatTableDataSource } from '@angular/material/table';

import * as alertify from 'alertifyjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

interface UserModel {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  skillset: string;
  hobby: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ID', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Username', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Name', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Email', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Phone', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Skillset', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Hobby', weight: 14.0067, symbol: 'N'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  @ViewChild(MatPaginator) paginator !:MatPaginator;

  UserDetail: any;
  dataSource: any;

  getAllUsers(){

    this.service.list().subscribe( item => {
      this.UserDetail = item;
      this.dataSource=new MatTableDataSource<UserModel[]>(this.UserDetail);
      this.dataSource.paginator=this.paginator;
    });

  }

  displayedColumns: string[] = ['username', 'name', 'email', 'phone', 'skillset', 'hobby', 'Action'];
  // dataSource = ELEMENT_DATA;

  functionUpdate(id: any){
    var popup = this.dialog.open(ModalComponent,{
      width: '400px',
      height:'400px',
      exitAnimationDuration:'100ms',
      enterAnimationDuration:'100ms',
      data: {
        id: id
      }
    })

    popup.afterClosed().subscribe( item => {
      this.getAllUsers()
    })
  }

  functionDelete(id: any){
    alertify.confirm("Remove user","Really?", ()=>{
      this.service.delete(id).subscribe(item => {
        this.getAllUsers();
        alertify.success("Delete success");
      })
    }, function(){

    })
   
  }

}