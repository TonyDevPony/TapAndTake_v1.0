import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCoffeHouseInfoPageRoutingModule } from './user-coffe-house-info-routing.module';

import { UserCoffeHouseInfoPage } from './user-coffe-house-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCoffeHouseInfoPageRoutingModule
  ],
  declarations: [UserCoffeHouseInfoPage]
})
export class UserCoffeHouseInfoPageModule {}
