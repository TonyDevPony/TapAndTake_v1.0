import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home.page/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login.page/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register.page/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr.page/qr.module').then( m => m.QRPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
