import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { HeaderComponentModule } from '../../components/header.component/header.component.module';
import { TextMaskModule } from 'angular2-text-mask';
import { AlertComponentModule } from 'src/app/components/alert.component/alert.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    HeaderComponentModule,
    AlertComponentModule,
    TextMaskModule,
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
