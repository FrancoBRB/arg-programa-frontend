import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      const user = new User(email, password);
      this.authService.login(user).subscribe((res: Token) => {
        console.log(res.token);
        window.sessionStorage.setItem('token', res.token);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      });
    }
  }
}
