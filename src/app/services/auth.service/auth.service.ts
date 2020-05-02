import { Injectable } from '@angular/core';
import { FileStorageForUserService } from '../fileStorageForUser.service/file-storage-for-user.service';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user;
  private user_id: number;


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
}
