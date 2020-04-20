import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service/auth.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private authService: AuthService, private router: Router) { }

  userIsLogged(route: ActivatedRouteSnapshot) : boolean {

    if(this.authService.getUser() === null) {
      return true;
    }
    return false;
    
  }


}
