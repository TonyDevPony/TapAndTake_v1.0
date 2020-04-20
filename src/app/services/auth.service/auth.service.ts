import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: object;
  private user_id: number;

  // Записать юзера в сторейдж при входе 


  constructor() { 
    this.user = null;
  }

  setUser(user: object) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  logOut() {
    this.user = null;
  }

}
