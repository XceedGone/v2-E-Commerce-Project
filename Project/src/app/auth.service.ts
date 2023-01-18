import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { UserModel } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user !: UserModel;
  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(
    private _apiService: ApiService
  ){   
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUsers(this.token);
  }
  
  login(data) {
    return this._apiService.logUser(data).pipe(
      tap((res:any)=>{    
          this._isLoggedIn$.next(true);
          localStorage.setItem(this.TOKEN_NAME, res.token);
          this.user = this.getUsers(res.token);
      })
    )
    }

  getUsers(token : string) : UserModel { 
      if(this.IsLoggedIn()){
        return JSON.parse(atob(token.split('.')[1])) as UserModel;
      }else{
        console.log('Not Logged in');
      }
  }

  IsLoggedIn(){
      return !!localStorage.getItem('token'); //true
    }

  IsNotLoggedIn(){
      return !localStorage.getItem('token'); //false
    }
  IsRegistered(){
      if(!!localStorage.getItem('token')){
        if(this.user.role == 'Registered'){
          return true;
        }
      } 
    } 
  IsAdmin(){
      if(!!localStorage.getItem('token')){
        if(this.user.role == 'Admin'){
          return true;
        }
      }     
    }
  IsStaff(){
      if(!!localStorage.getItem('token')){
        if(this.user.role == 'Staff'){
          return true;
        }
      }  
    }
  }

 



  


