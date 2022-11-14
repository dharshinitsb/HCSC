import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  user:User = new User('','');
  constructor(private service:AuthServiceService,private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
 
    this.service.authenticate(this.user).subscribe((res:any)=>{
      this.service.data=res;
       console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      
    }, (error:any)=>{
      console.log(error);
      Swal.fire("Login Failed!");
    })
  }

}
