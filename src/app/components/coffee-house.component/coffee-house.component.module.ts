import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { CoffeeHouseComponent } from './coffee-house.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CoffeeHouseComponent],
  exports: [CoffeeHouseComponent]
})
export class CoffeeHouseComponentModule {}