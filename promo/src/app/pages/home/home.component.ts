import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../core/services/validation/validation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private validationService: ValidationService
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

  signOut(): void {
    this.authService.signOut();
  }
}
