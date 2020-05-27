import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCoffeHouseInfoPage } from './user-coffe-house-info.page';

const routes: Routes = [
  {
    path: '',
    component: UserCoffeHouseInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCoffeHouseInfoPageRoutingModule {}
