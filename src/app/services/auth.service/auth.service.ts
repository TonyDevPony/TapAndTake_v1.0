import { Injectable } from '@angular/core';
import { FileStorageForUserService } from '../fileStorageForUser.service/file-storage-for-user.service';

export interface User {
  id: number,
  name: string,
  seed: string,
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user;
  private user_id: number;


  constructor(
    private FileStorForuser: FileStorageForUserService,
    ) { 
  }

  setUser(user) {
    // this.FileStorForuser.writeToFile(user);
    this.FileStorForuser.readFile();
     
  }

  getUser() {
    return this.user;
  }
}
