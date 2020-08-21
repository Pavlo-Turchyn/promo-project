import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, ItemComponent, ListItemComponent],
  imports: [CommonModule, SharedModule],
})
export class PagesModule {}
