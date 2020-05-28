import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service/auth.service';
import { Router, ActivatedRouteSnapshot, CanActivate, NavigationExtras } from '@angular/router';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { FileStorageForUserService } from '../fileStorageForUser.service/file-storage-for-user.service';

/* 
  Ключ по которому лежит информация
  в сторейдже о юзере
*/

const STORAGE_KEY_FOR_USER_INFO = 'user_info';

/* Интерфейс для иницилизации полей Юзера */ 

export interface User {
  id_user: number,
  user_sid: string,
  name: string,
};


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  user_inf: any;
  user_from_storage: any;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private nav: NavController,
    private FileStorForUser: FileStorageForUserService,
    private http: HTTP,
    public toastController: ToastController,
    private loadingController: LoadingController,
    
    ) {
      
      
    }

  // forTest() {
  //   this.nav.navigateRoot('home');
  //   return true;
  // }

/* Метод для получения данных о юзере со сторейджа */
  async getUserFromStore() {
    return this.FileStorForUser.getUserFromStorage(STORAGE_KEY_FOR_USER_INFO)
      .then(res => { return res }).catch(err => {
        console.log(err);
      });
  }

  

  async canActivate(route: ActivatedRouteSnapshot) : Promise<any> {
    /* Получаем id и sid */ 

    
    let storeRes: any;
    await this.getUserFromStore().then(res => {
      if(res) {
        storeRes = res;
      }
    }).catch(err => {console.log(err);});
    /* 
       Если в сторейдже был юзер,
       отправляем запрос на сервер и
       иницилизируем юзера 
    */

    if(storeRes) {
    /* Создаем обьект и парсим в него результат предидущего метода */

      let parseData: User;
      parseData = JSON.parse(storeRes);
      console.log('Store res is ↓');

      console.log(storeRes);
      this.authService.setAuthConf(parseData.id_user, parseData.user_sid);
      this.nav.navigateRoot('home');
    
      return false;
    }
    return true;
  }
  


}
