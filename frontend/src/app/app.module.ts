import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { StatusComponent } from './status/status.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MaterialModule } from 'src/material.module';
import { ModalComponent } from './modal/modal.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    StatusComponent,
    UserComponent,
    ModalComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
