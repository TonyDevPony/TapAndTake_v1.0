import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './services/guard.service/guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./main.pages/home.page/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./auth.pages/login.page/login.module').then( m => m.LoginPageModule),
    canActivate: [GuardService],
  },
  {
    path: 'register',
    loadChildren: () => import('./auth.pages/register.page/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./main.pages/user/qr.page/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth.pages/forgot-password.page/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./auth.pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'user-settings',
    loadChildren: () => import('./main.pages/user/user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
  },
  {
    path: 'admin-coffee-houses',
    loadChildren: () => import('./main.pages/admin/admin-coffee-houses/admin-coffee-houses.module').then( m => m.AdminCoffeeHousesPageModule)
  },
  {
    path: 'admin-settings',
    loadChildren: () => import('./main.pages/admin/admin-settings/admin-settings.module').then( m => m.AdminSettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
