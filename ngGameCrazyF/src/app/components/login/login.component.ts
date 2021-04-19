import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(
private auth: AuthService,
private router: Router

  ) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.user);

    this.auth.login(this.user.username, this.user.password).subscribe(
      loggedIn => {
        console.log('Logged in:');
        console.log(loggedIn);
        this.router.navigateByUrl('/todo');
      },
      denied => {
        console.error('LoginComponent.login(): login failed');
        console.error('denied');
      }
    );
  }

}
