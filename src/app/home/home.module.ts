import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HeaderComponentModule } from '../header.component/header.component.module';
import { CoffeeHouseComponentModule } from '../coffee-house.component/coffee-house.component.module';
import { FavoritesComponentModule } from '../favorites.component/favorites.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderComponentModule,
    CoffeeHouseComponentModule,
    FavoritesComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
