import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { AlertComponent } from './alert.component';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TextMaskModule
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class AlertComponentModule {}