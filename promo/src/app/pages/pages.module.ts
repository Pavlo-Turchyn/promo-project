import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [CommonModule, SharedModule],
})
export class PagesModule {}
