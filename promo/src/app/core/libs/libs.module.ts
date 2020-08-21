import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperModule } from './auth-wrapper/auth-wrapper.module';
import { StylesWrapperModule } from './styles-wrapper/styles-wrapper.module';

const MODULES = [CommonModule, AuthWrapperModule, StylesWrapperModule];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class LibsModule {
  constructor() {}
}
