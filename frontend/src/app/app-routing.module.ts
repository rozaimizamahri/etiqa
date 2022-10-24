import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ 
  {path: '', component: AddUserComponent},
  {path: 'home', redirectTo: '/user'},
  {path: 'user', component: UserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path:'**',component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
