import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule],
  providers: [AuthService],
})
export class CoreModule {
  constructor() {}
}
