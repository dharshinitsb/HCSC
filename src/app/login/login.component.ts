import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata = {email:"",password:""};
  hide: boolean = false;
  submit=false;
  loading=false;
  errorMessage="";
 
  constructor(private service:AuthServiceService,private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void { this.service.canAuthenticate();
  }
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loading=true;
    //call login service
    this.service.login(this.formdata.email,this.formdata.password) .subscribe({
      next:data=>{
          //store token
          this.service.storeToken(data.idToken);
          console.log('logged user token is '+data.idToken);
          this.service.canAuthenticate();
      },
      error:data=>{
          if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {
              this.errorMessage = "Invalid Credentials!";
          } else{
              this.errorMessage = "Unknown error when logging into this account!";
          }
      }
  }).add(()=>{
      this.loading =false;
      console.log('login process completed!');
      this.router.navigate(['home']);

  })
}

}
