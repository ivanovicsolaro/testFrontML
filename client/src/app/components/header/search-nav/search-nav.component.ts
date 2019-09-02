import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.sass']
})
export class SearchNavComponent {

  formSearchNav = new FormGroup({
    searchText: new FormControl()
  });

  constructor( private router: Router) { }

  search() {
    if (this.chequearID(this.formSearchNav.value.searchText )) {
      this.router.navigate(['/items/' + this.formSearchNav.value.searchText]);
    } else {
      this.router.navigate(['/items'], { queryParams: { search: this.formSearchNav.value.searchText } });
    }
  }

  chequearID( cadena: string ) {
    let isID = true;

    if (!(cadena.length >= 12)) {
      isID = false;
    }

    if (this.formSearchNav.value.searchText.slice(0, 2) !== 'ML') {
      isID = false;
    }

    return isID;
  }

}
