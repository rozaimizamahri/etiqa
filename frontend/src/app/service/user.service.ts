import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserModel {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  skillset: string;
  hobby: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  apiUrl = 'http://localhost:3000/user/';
 
  list():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.apiUrl + 'list');
  }

  create(inptdata:any){
    return this.http.post(this.apiUrl + 'create', inptdata);
  }

  view(userId:any){
    return this.http.get(this.apiUrl + 'view/' + userId);
  }

  update(id: any, inputData: any){
    return this.http.put(this.apiUrl + 'update/'+id ,inputData);
  }

  delete(userId:any){
    return this.http.delete(this.apiUrl + 'delete/' + userId);
  }


}
