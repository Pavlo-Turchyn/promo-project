import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  setValidators(type: string): ValidatorFn[] {
    const emailPattern =
      '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    const validators: ValidatorFn[] = [];

    if (type === 'email') {
      validators.push(Validators.email);
      validators.push(Validators.minLength(6));
      validators.push(Validators.pattern(emailPattern));
      validators.push(Validators.required);
    }

    return validators;
  }
}
