import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    SearchNavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SearchNavComponent,
    BreadcrumbComponent
  ]
})
export class HeaderModule { }
