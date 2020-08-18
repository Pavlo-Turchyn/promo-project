import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperModule } from './auth-wrapper/auth-wrapper.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthWrapperModule],
})
export class LibsModule {
  constructor() {}
}
