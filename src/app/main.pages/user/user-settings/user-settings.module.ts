import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSettingsPageRoutingModule } from './user-settings-routing.module';

import { UserSettingsPage } from './user-settings.page';
import { HeaderComponentModule } from 'src/app/components/header.component/header.component.module';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSettingsPageRoutingModule,
    HeaderComponentModule,
    TextMaskModule,
  ],
  declarations: [UserSettingsPage]
})
export class UserSettingsPageModule {}
