import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSettingsPageRoutingModule } from './admin-settings-routing.module';

import { AdminSettingsPage } from './admin-settings.page';
import { HeaderComponentModule } from 'src/app/components/header.component/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSettingsPageRoutingModule,
    HeaderComponentModule,
  ],
  declarations: [AdminSettingsPage]
})
export class AdminSettingsPageModule {}
