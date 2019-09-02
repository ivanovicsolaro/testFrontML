import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemCondition'
})
export class ItemConditionPipe implements PipeTransform {

  transform(value: string): any {
    switch (value) {
      case 'new':
        return 'Nuevo';
        break;

      case 'used':
          return 'Usado';
          break;

      default:
        return 'No especifica';
        break;
    }
  }

}
