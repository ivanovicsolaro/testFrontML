import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../services/items.service';
import { ResultSearchItem, ResultItem } from '../../../interfaces/ItemsInterfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent  {

  resultSearch: ResultSearchItem;
  resultsItems: ResultItem[] = [];
  categories: String[] = [];

  constructor(  private route: ActivatedRoute, private itemsService: ItemsService ) {
    this.route.queryParams.subscribe( params => {
       this.getResults( params );
    });
  }

  getResults( query ) {
      this.itemsService.search(query.search)
      .subscribe( result => {
       this.resultsItems = result.items;
       this.categories = result.categories;
      });
  }
}
