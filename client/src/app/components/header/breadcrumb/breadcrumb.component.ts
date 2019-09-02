import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('categories') categories: string[];
  @Input('lastElement') lastElement: string;

  constructor() { }

}
