import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service/auth.service';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
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

/* Интерфейс который содержит поля которые прийдут с сервера, нужно для типизации обьекта */

export interface DataFromServer {
  success: boolean,
  error: boolean,
  data: string,
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



/* Метод для получения данных о юзере со сторейджа */
  async getUserFromStore() {
    return this.FileStorForUser.getUserFromStorage(STORAGE_KEY_FOR_USER_INFO)
      .then(res => { return res }).catch(err => {
        console.log(err);
      });
  }

  async presentToast(name) {
    const toast = await this.toastController.create({
      message: `Приветсвую, ${name}`,
      duration: 1000,
      cssClass: 'toast',
    });
    toast.present();
  }
  

  async canActivate(route: ActivatedRouteSnapshot) : Promise<any> {

    const load = await this.loadingController.create({
      cssClass: 'spinerColor',
      message: "Вход...",
      spinner: "lines",
    });
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
      
      let dataForServer = {
        id_user: parseData.id_user,
        sid: parseData.user_sid,
      };
    

      await this.http.post('https://sc.grekagreka25.had.su/user/get/', dataForServer, {}).then(answer => {
        console.log("Answer is ");
        console.log(answer.data);

        let answerParse: DataFromServer;
        answerParse = JSON.parse(answer.data);
        if(answerParse.success) {
          var user = Object.assign(dataForServer, answerParse.data);
          this.authService.setUser(user);
        }
        load.dismiss();
        this.nav.navigateRoot('home');
        setTimeout(() => {
          this.presentToast(this.authService.getUser().name);
        }, 300);

      }).catch(err => {console.log('Error: ' + err);})
      // console.log(this.authService.getUser());
      
      return false;
    }
    load.dismiss();
    return true;
  }
  


}
