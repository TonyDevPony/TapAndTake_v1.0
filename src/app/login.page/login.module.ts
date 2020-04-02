import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HeaderComponentModule } from '../header.component/header.component.module';
import { RegisterAlertComponentModule } from '../register-alert.component/register-alert.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HeaderComponentModule,
    RegisterAlertComponentModule,
  ],
  providers: [
    Keyboard
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
