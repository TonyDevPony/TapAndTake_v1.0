import { Injectable } from '@angular/core';
import { FileStorageForUserService } from '../fileStorageForUser.service/file-storage-for-user.service';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = null;
  private user_id =  -1;
  private user_sid = "";


  constructor(
    private FileStorForuser: FileStorageForUserService,
    private http: HTTP,
    ) { 
  }


  setUser(user: object) {
     this.user = user;
  }

  getUser() {
    return this.user;
  }

  getUserId()
  {
    this.user_id;
  }

  setAuthConf(user_id: number, user_sid: string) {
    this.user_id = user_id;
    this.user_sid = user_sid;    
  }

  getAthConf() {
    return {
      user_id: this.user_id,
      user_sid: this.user_sid,
    }
  }

}
