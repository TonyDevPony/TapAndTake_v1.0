import { Injectable } from '@angular/core';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

const STORAGE_KEY_FOR_USER_INFO = 'user_info';

@Injectable({
  providedIn: 'root'
})
export class FileStorageForUserService {
 
  private user;


  constructor(
    private file: File,
    private filePath: FilePath,
    private http: HttpClient,
    private storage: Storage,
  ) { 
  }
  private async storageIsReady() {
    return this.storage.ready().then(res => {return res});
  }

  setUserToStorage(store_key: string, data: any) {
    this.storageIsReady()
      .then(() => {
        this.storage.set(store_key, data)
          .then(answer => 
            console.log("User is set to storage \n" + answer))
        .catch(err => console.log("Error after set user to storage \n" + err));
    })
    .catch(err => {
      console.log("Error after check is storage ready \n" + err);
    }); 
  }

  async getUserFromStorage(store_key: string) {
    return this.storageIsReady().then(async () => {
        try {
        const answer = await this.storage.get(store_key);
        return answer;
      }
      catch (err) {
        return console.log("Error after get user from storage\n" + err);
      }
    }).catch(err => {
      console.log("Error after check is storage ready \n" + err);
    });
  }



  async removeUserFromStorage(storage_key) {
    return this.storageIsReady().then(async () => {
      try {
        const answer = await this.storage.remove(storage_key);
        return answer;
      }
      catch (err) {
        console.log('Error after remove user from storrage \n' + err);
      }
    }).catch(err => {console.log("Error after check is storage ready \n" + err);})
  }

}
