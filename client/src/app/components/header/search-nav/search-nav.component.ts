import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.sass']
})
export class SearchNavComponent implements OnInit {

  formSearchNav = new FormGroup({
    searchText: new FormControl()
  });

  constructor( private router: Router) { }

  ngOnInit() {
  }

  search() {
      this.router.navigate(['/items'], { queryParams: { search: this.formSearchNav.value.searchText } });
  }

}
