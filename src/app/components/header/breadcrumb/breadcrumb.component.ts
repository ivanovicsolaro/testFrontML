import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('categories') categories: string[];

  constructor() { }

  ngOnInit() {
  }

}
