import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    this.route.params.subscribe( id => {
      console.log(id);
    });
  }

  ngOnInit() {
  }

}
