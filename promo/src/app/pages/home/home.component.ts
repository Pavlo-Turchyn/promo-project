import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../core/services/validation/validation.service';
import { ApiService } from '../../core/services/api/api.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CatImg } from '../../core/models/models';
import { Router } from '@angular/router';
import { DataSharingService } from '../../core/services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject<void>();
  amountOfCats = 5;
  catsImages: CatImg[];
  form: FormGroup;
  catsTitle = 'cats';
  constructor(
    private authService: AuthService,
    private validationService: ValidationService,
    private apiService: ApiService,
    private router: Router,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.getCats();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  handleRedirectEvent(index: number): void {
    this.router.navigateByUrl(`item/${index}`);
  }

  createForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        ...this.validationService.setValidators('email'),
      ]),
    });
  }

  getCats(): void {
    this.apiService
      .getCats(this.amountOfCats)
      .pipe(
        takeUntil(this.unsubscribe),
        map((data: object[]) => this.filterCatImgFields(data))
      )
      .subscribe(
        (data: CatImg[]): void => {
          this.onGetCatsSuccess(data);
        },
        (error) => console.log(error)
      );
  }

  onGetCatsSuccess(data: CatImg[]): void {
    this.catsImages = data;
  }

  onCatSelect(data: string, index: number): void {
    this.dataSharingService.emitCatDataChange(data);
    // this.redirectToItem(index);
  }

  filterCatImgFields(data): CatImg[] {
    return data.map((el: CatImg) => {
      return { id: el.id, url: el.url };
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
