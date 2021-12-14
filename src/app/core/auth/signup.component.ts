import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/models/user';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted: boolean = false;
  public error: string = '';
  TOKEN_HEADER = 'x-auth-token';

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required]
    });
  }

  signUp() {
    console.log(this.form);
    if (this.form.password.value !== this.form.confirm_password.value) {
      this.error = 'Passwords does not match';
      setTimeout(() => {
        this.error = '';
      }, 3000);
      return;
    }

    let user = {
      name: this.form.name.value,
      username: this.form.username.value,
      password: this.form.password.value,
      role: this.form.role.value
    };
    console.log(user);
    this.userService.createUser(user).subscribe((res: any) => {
      if (res) {
        localStorage.setItem(this.TOKEN_HEADER, res.token);
        this.router.navigate(['/home']);
      }
    }, error => {
      console.log(error);
      this.error = error;

      setTimeout(() => {
        this.error = '';
      }, 3000);
    })
  }

  public get form() {
    return this.signupForm.controls;
  }
}
