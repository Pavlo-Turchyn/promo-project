import { ValidationService } from './validation.service';
import { TestBed } from '@angular/core/testing';

let validationService: ValidationService;

describe('Validation service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationService],
    });
    validationService = TestBed.inject(ValidationService);
  });
  it('setValidators method should be defined', () => {
    expect(validationService.setValidators).toBeDefined();
  });
  it('setValidators method should return array', () => {
    const validatorFnArray = validationService.setValidators('random string');
    expect(validatorFnArray).toEqual([]);
  });
  it('setValidators method should return not empty array when type is email', () => {
    const validatorFnArray = validationService.setValidators('email');
    expect(validatorFnArray).not.toEqual([]);
  });
});
