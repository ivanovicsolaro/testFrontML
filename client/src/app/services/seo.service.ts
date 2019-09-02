import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor( private meta: Meta ) { }

  generatesTags( config ) {
    config = {
      title: 'Mercado Libre Test',
      description: 'La comunidad de compra y venta online más grande de América Latina.',
      slug: '',
      ...config
    };

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@ML_Argentina' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });

    this.meta.updateTag({ property: 'og:type', content: 'Items Test' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Mercado Libre Test' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: `http://localhost:4200/${config.slug}` });
  }
}
