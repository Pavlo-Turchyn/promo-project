import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '../core/libs/libs.module';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [BackgroundColorDirective, SortPipe],
  imports: [CommonModule, ReactiveFormsModule, LibsModule],
  exports: [ReactiveFormsModule, LibsModule, BackgroundColorDirective, SortPipe],
})
export class SharedModule {}
