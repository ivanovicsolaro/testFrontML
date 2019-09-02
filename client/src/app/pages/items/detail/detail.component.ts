import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../interfaces/ItemsInterfaces';
import { SeoService } from '../../../services/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  item: Item;

  constructor(  private route: ActivatedRoute,
                private itemService: ItemsService,
                private seoService: SeoService,
                private title: Title ) {
                  this.route.params.subscribe( param => {
                    this.getDetailItem( param.id );
                  });
                }

  ngOnInit() {
    this.seoService.generatesTags({
      title: this.title,
      slug: this.title,
    });
  }

  getDetailItem( id ) {
    this.itemService.getDetailById(id)
      .subscribe( result => {
        this.item = result.item;
        this.title.setTitle(this.item.title + ' en Mercado Libre');
      });
  }
}
