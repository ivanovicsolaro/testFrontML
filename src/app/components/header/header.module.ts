import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchNavComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchNavComponent
  ]
})
export class HeaderModule { }
