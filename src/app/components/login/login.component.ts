import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    // Replace this with your authentication logic
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/secure']);
    } else {
      // Handle invalid login
      alert('Invalid login credentials');
    }
  }
}