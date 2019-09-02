import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../services/items.service';
import { ResultSearchItem, ResultItem } from '../../../interfaces/ItemsInterfaces';
import { SeoService } from '../../../services/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  resultSearch: ResultSearchItem;
  resultsItems: ResultItem[] = [];
  categories: String[] = [];
  lastElement: string;

  constructor(  private route: ActivatedRoute,
                private itemsService: ItemsService,
                private title: Title,
                private seoService: SeoService ) {
    this.route.queryParams.subscribe( params => {
       this.getResults( params );
    });
  }

  ngOnInit() {
    this.seoService.generatesTags({
      title: this.title,
      description: 'La comunidad de compra y venta online más grande de América Latina.',
      slug: this.categories,
    });
  }

  getResults( query ) {
    this.itemsService.search(query.search)
      .subscribe( result => {
        this.resultsItems = result.items;
        this.categories = result.categories;
        this.lastElement = result.categories.pop();
        this.title.setTitle(this.categories.join().replace(/,/g , ' - ') + ' en Mercado Libre');
    });
  }
}
