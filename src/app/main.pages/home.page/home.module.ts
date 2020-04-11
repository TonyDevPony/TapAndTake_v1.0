import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HeaderComponentModule } from '../../components/header.component/header.component.module';
import { CoffeeHouseComponentModule } from '../../components/coffee-house.component/coffee-house.component.module';
import { FavoritesComponentModule } from '../../components/favorites.component/favorites.component.module';


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
