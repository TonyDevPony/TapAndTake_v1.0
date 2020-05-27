import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BussinessInfoPageRoutingModule } from './bussiness-info-routing.module';

import { BussinessInfoPage } from './bussiness-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BussinessInfoPageRoutingModule
  ],
  declarations: [BussinessInfoPage]
})
export class BussinessInfoPageModule {}
