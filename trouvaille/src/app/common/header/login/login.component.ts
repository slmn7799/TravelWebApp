import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Input() data?: string;

  login?: boolean;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private authService: AuthService,
              private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.data)
    this.login = this.data ? true: false;
  }

  toggleForm(){
    this.login = !this.login;
  }

  onSubmit() {
    // Handle login logic here
    console.log(this.loginForm.value);
    const credentials = {
      email: this.email?.value,
      password: this.password?.value
    };
    if(this.login){
      this.authService.login(credentials).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(["/dashboard"]);
          this.activeModal.dismiss();
          },
        error => console.error(error)
      );
    } else{
      this.authService.signup(credentials).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(["/dashboard"]);
          this.activeModal.dismiss();
          },
        error => console.error(error)
      );
    }
    
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
