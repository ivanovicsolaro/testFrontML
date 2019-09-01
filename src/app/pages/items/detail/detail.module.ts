import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { HeaderModule } from '../../../components/header/header.module';
import { PipesModule } from '../../../pipes/pipes.module';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    HeaderModule,
    PipesModule
  ]
})
export class DetailModule { }
