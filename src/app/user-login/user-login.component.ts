import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators,FormControl, AbstractControl } from '@angular/forms'


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userData: FormGroup = new FormGroup({
   
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;

  signupUsers: any[] = [];
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private router:Router,private formBuilder: FormBuilder ) {
   
   }

  ngOnInit(): void {
    this.userData = this.formBuilder.group(
      {
        
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]})
      
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.userData.controls;
  }
  Submit_data(): void {
    this.submitted = true;

    if (this.userData.invalid) {
      
      return ;
    }

    console.log(JSON.stringify(this.userData.value, null, 2));
  }

  onSignUp() {
    if (this.userData.valid) {
   this.signupUsers.push(this.signupObj);}
   localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
   this.signupObj = {
    userName: '',
    email: '',
    password: ''
  };
  }
  onLogin() {
    
    const isUserExist =this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password ==this.loginObj.password);
    if(isUserExist != undefined)
    {
      // alert('Successfully logged in')
      this.router.navigateByUrl('/dashboard');
    }
    else{
    alert('Wrong User Credentials');}


  
  }
  btnClick=  () => {
    this.router.navigateByUrl('/dashboard');
}
}