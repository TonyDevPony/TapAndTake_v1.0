import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCoffeeHousesPage } from './admin-coffee-houses.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCoffeeHousesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCoffeeHousesPageRoutingModule {}
