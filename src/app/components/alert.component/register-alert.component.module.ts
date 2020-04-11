import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { RegisterAlertComponent } from './register-alert.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [RegisterAlertComponent],
  exports: [RegisterAlertComponent]
})
export class RegisterAlertComponentModule {}