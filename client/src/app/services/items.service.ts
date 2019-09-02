import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResultSearchItem, ItemDetail } from '../interfaces/ItemsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  URL = environment.URL;

  constructor( private http: HttpClient ) { }

  search(query: string) {
    return this.http.get<ResultSearchItem>(`${ this.URL }/items?q=${ query }`);
  }

  getDetailById( id ) {
    return this.http.get<ItemDetail>(`${ this.URL }/items/${ id }`);
  }


}
