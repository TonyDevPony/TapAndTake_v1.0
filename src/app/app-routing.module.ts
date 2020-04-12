import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./main.pages/home.page/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./auth.pages/login.page/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth.pages/register.page/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./main.pages/qr.page/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth.pages/forgot-password.page/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./auth.pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
