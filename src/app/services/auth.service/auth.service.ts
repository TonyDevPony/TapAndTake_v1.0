import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: object;
  private user_id: number;

  // Записать юзера в сторейдж при входе 


  constructor(private storage: Storage) { 
    this.user = null;
  }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  logOut() {
    this.user = null;
  }

}
