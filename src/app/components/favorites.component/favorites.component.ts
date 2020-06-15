import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['../coffee-house.component/coffee-house.component.scss'],
})
export class FavoritesComponent implements OnInit {



  coffeeHouses = [];

  favoriteCoffehouse: any;

  coffeeCups = [];

  countCups = [];

  user: any;
  creatorId: any;
 
  constructor(private http: HTTP, private Auth: AuthService) { }

  async ngOnInit() {
    // let toolbar = <HTMLElement>document.querySelector('#toolbar');
    // let isScrolling;
    // document.querySelector('.section_coffee_houses')
    //         .addEventListener('scroll', function (e) {
    //             /* 
    //               Отлавливание остановки скролинга
    //               Путем создания наперед таймаута
    //               И с последуйщим срабатыванием ивента 'scroll'
    //               отменяем текущий таймаут и устанавливаем следуйщий
    //               если таймаут не удалился, значит скрол остановился
    //             */
    //            toolbar.style.display = 'none';
    //             window.clearTimeout(isScrolling);
    //             isScrolling = setTimeout( function() {
    //               toolbar.style.display = 'flex';
    //             }, 66);
    //         });


    // this.getCoffeeHousess();
    // setTimeout(() => {
    //   this.user = this.Auth.getAthConf();
    //   this.creatorId = this.user.user_id;
    //   this.favoriteCoffehouse = this.getCoffeeHousess();
    // }, 1600);
    // this.creatorId = this.user.user_id;


  }


  // async getCoffeeHousess() {
    
    
    // await this.http.post('https://sc.grekagreka25.had.su/coffeehouse/getFavorites', {userId: this.creatorId}, {}).then(answer => {
    //     console.log('Answer from server...');
    //     console.log("Answer params: ");
    //     return JSON.parse(answer.data);
    //     // this.favoriteCoffehouse =  JSON.parse(answer.data);
    //     // console.log(this.favoriteCoffehouse);
    //   }).catch(err => {console.log('Error: ' + err);}) 
  // }
}
