import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCoffeeHousesPageRoutingModule } from './admin-coffee-houses-routing.module';

import { AdminCoffeeHousesPage } from './admin-coffee-houses.page';
import { HeaderComponentModule } from 'src/app/components/header.component/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCoffeeHousesPageRoutingModule,
    HeaderComponentModule,
  ],
  declarations: [AdminCoffeeHousesPage]
})
export class AdminCoffeeHousesPageModule {}
