import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
    window.sessionStorage.removeItem("token");
    this.isLogged = false;
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
