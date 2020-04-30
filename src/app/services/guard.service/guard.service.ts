import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service/auth.service';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FileStorageForUserService } from '../fileStorageForUser.service/file-storage-for-user.service';



@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  user_inf: any;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private nav: NavController,
    private FileStorForUser: FileStorageForUserService,
    ) {
    }


  canActivate(route: ActivatedRouteSnapshot) : boolean {
  
  
    
    return false;
  }
  


}
