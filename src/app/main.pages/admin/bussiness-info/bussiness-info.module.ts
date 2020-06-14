import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { BussinessInfoPageRoutingModule } from './bussiness-info-routing.module';

import { BussinessInfoPage } from './bussiness-info.page';
import { HeaderComponentModule } from 'src/app/components/header.component/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BussinessInfoPageRoutingModule,
    HeaderComponentModule,
  ],
  declarations: [BussinessInfoPage]
})
export class BussinessInfoPageModule {}
