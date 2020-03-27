import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { HeaderComponentModule } from '../header/header.component.module';
import { RegisterAlertComponentModule } from '../register-alert/register-alert.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    HeaderComponentModule,
    RegisterAlertComponentModule,
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
