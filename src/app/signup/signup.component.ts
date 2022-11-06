import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
 ;
  
  user:User = new User('','','','','');

  constructor(private service:AuthServiceService, private router:Router,private fb: FormBuilder) { }
  hide: boolean = false;

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    username:['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    address:['',[Validators.required]],
    phoneNumber:['',[Validators.required]]
     
  })


  
  register() {
   
    
    console.log(this.loginForm.value);
    this.service.register(this.user).subscribe((res:any)=>{
      this.service.data=res;
      console.log(res);
      Swal.fire("Registration successful!");
      this.router.navigate(['login']);
    },
    (error:any)=>{
      console.log(error);
      Swal.fire("Registration Failed!");
    })
  }
 

}
