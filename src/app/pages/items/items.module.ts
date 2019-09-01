import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { HeaderModule } from '../../components/header/header.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HeaderModule
  ]
})
export class ItemsModule { }
