import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../interfaces/ItemsInterfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  item: Item;
  constructor( private route: ActivatedRoute, private itemService: ItemsService ) {
    this.route.params.subscribe( param => {
      this.getDetailItem( param.id );
    });
  }

  ngOnInit() {
  }

  getDetailItem( id ) {
    this.itemService.getDetailById(id)
      .subscribe( result => {
        this.item = result.item;
        console.log(this.item );
      });
  }
}
