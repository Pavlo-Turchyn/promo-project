import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '../core/libs/libs.module';
import { BackgroundColorDirective } from './directives/background-color.directive';

@NgModule({
  declarations: [BackgroundColorDirective],
  imports: [CommonModule, ReactiveFormsModule, LibsModule],
  exports: [ReactiveFormsModule, LibsModule, BackgroundColorDirective],
})
export class SharedModule {}
