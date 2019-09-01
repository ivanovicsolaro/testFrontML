import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandsPipePipe } from './thousands-pipe.pipe';
import { ItemConditionPipe } from './item-condition.pipe';



@NgModule({
  declarations: [
    ThousandsPipePipe,
    ItemConditionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThousandsPipePipe,
    ItemConditionPipe
  ]
})
export class PipesModule { }
