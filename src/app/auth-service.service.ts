import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  data:any;
  authurl:string = "http://localhost:8084/auth/";

  constructor(private _httpClient:HttpClient, private router:Router) { }

  
  authenticate(user:any):any{
   return this._httpClient.post(this.authurl+"authenticate", user);
  }

  register(user:any):any{
    return this._httpClient.post(this.authurl+"register", user, {responseType:'text'});
  }

  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  getToken(){
    return localStorage.getItem('token')||'';
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        //redirect to login
        this.router.navigate(['/login']);
    }
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  

  storeToken(token:string){
      sessionStorage.setItem('token',token);
  }

  login(email:string,password:string){
    //send data to login api (firebase)
      return this._httpClient
      .post<{idToken:string}>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]',
            {email,password}
      );
  }

  detail(){
    let token = sessionStorage.getItem('token');

    return this._httpClient.post<{users:Array<{localId:string,displayName:string}>}>(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]',
        {idToken:token}
    );
  }

  removeToken(){
    sessionStorage.removeItem('token');
  }
}
