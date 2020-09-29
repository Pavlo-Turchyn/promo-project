import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { ValidationService } from '../../core/services/validation/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private validationService: ValidationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        ...this.validationService.setValidators('email'),
      ]),
      password: new FormControl('', [
        ...this.validationService.setValidators('text'),
      ]),
    });
  }

  signIn(type: string): void {
    switch (type) {
      case 'google': {
        this.authService.googleAuth();
        break;
      }
      case 'facebook': {
        this.authService.facebookAuth();
        break;
      }
      default:
        break;
    }
    this.navigateToHomeIfLoggedIn();
  }

  navigateToHomeIfLoggedIn(): void {
    this.authService.userIsLoggedIn.subscribe(
      (): void => {
        this.router.navigateByUrl('home');
      },
      (error): void => console.log(error.message)
    );
  }
}
