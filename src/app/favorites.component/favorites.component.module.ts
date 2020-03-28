import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FavoritesComponent } from './favorites.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [FavoritesComponent],
  exports: [FavoritesComponent]
})
export class FavoritesComponentModule {}