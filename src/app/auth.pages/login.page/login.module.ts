import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HeaderComponentModule } from '../../components/header.component/header.component.module';
import { AlertComponentModule } from 'src/app/components/alert.component/alert.component.module';
import { AlertComponent } from 'src/app/components/alert.component/alert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HeaderComponentModule,
    AlertComponentModule,
  ],
  providers: [
    Keyboard,
    AlertComponent,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
