import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    console.log(this.route.snapshot.paramMap.get('search'));
  }

  ngOnInit() {
  }

}
