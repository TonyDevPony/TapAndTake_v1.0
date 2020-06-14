import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-coffee-house',
  templateUrl: './coffee-house.component.html',
  styleUrls: ['./coffee-house.component.scss'],
})
export class CoffeeHouseComponent implements OnInit {

  path_to_empty_cups = "background-image: url('../../../assets/img/cards/cups/full/empty_cups.svg')";
  path_to_full_cups = "background-image: url('../../../assets/img/cards/cups/full/cups_full.svg')";
  // Общая инфа о кофейне
  // coffeeHouses = [
  //   {
  //     id_coffeehouse: 1, 
  //     promotional_cups: 10,
  //   },
  //   {
  //     id_coffeehouse: 2, 
  //     promotional_cups: 7,
  //   },
  //   {
  //     id_coffeehouse: 3, 
  //     promotional_cups: 8,
  //   },
  //   {
  //     id_coffeehouse: 4, 
  //     promotional_cups: 10,
  //   },
  //   {
  //     id_coffeehouse: 5, 
  //     promotional_cups: 7,
  //   },
  //   {
  //     id_coffeehouse: 6, 
  //     promotional_cups: 8,
  //   },
  //   {
  //     id_coffeehouse: 7, 
  //     promotional_cups: 10,
  //   },
  //   {
  //     id_coffeehouse: 8, 
  //     promotional_cups: 7,
  //   },
  //   {
  //     id_coffeehouse: 9, 
  //     promotional_cups: 8,
  //   },
  //   {
  //     id_coffeehouse: 10, 
  //     promotional_cups: 10,
  //   },
  // ];
  // // Инфа о кофейне с привязкой к юзеру
  // coffeeCups = [
  //   {
  //     id_coffeehouse: 1,
  //     cups_bought: 6,
  //   },
  //   {
  //     id_coffeehouse: 7,
  //     cups_bought: 10,
  //   },    
  //   {
  //     id_coffeehouse: 8,
  //     cups_bought: 3,
  //   },
  //   {
  //     id_coffeehouse: 9,
  //     cups_bought: 4,
  //   },
  //   {
  //     id_coffeehouse: 10,
  //     cups_bought: 6,
  //   },
  // ];

  // coffeeCupsTest = [
  //   {is_full: true},
  //   {is_full: true},
  //   {is_full: true},
  //   {is_full: true},
  //   {is_full: true},
  //   {is_full: false},
  //   {is_full: false},
  //   {is_full: false},
  //   {is_full: false},
  //   {is_full: false},
  // ]

  coffeeHouses = [];

  coffeeHousesTmp = [];

  coffeeCups = [];

  countCups = [];
 

  constructor(
    private http: HTTP,
  ) { }

  ngOnInit() {
    let toolbar = <HTMLElement>document.querySelector('#toolbar');
    let isScrolling;
    document.querySelector('.section_coffee_houses')
            .addEventListener('scroll', function (e) {
                /* 
                  Отлавливание остановки скролинга
                  Путем создания наперед таймаута
                  И с последуйщим срабатыванием ивента 'scroll'
                  отменяем текущий таймаут и устанавливаем следуйщий
                  если таймаут не удалился, значит скрол остановился
                */
               toolbar.style.display = 'none';
                window.clearTimeout(isScrolling);
                isScrolling = setTimeout( function() {
                  toolbar.style.display = 'flex';
                }, 66);
            });

    this.getCoffeeHousess().then(() => {
      console.log(this.coffeeHouses)

      this.setCoffeehousesCups();
    });
  }

  async getCoffeeHousess() {
    await this.http.post('https://sc.grekagreka25.had.su/coffeehouse/getAll', {}, {}).then(answer => {
        console.log('Answer from server...');
        console.log("Answer params: ");
        let dataParse = JSON.parse(answer.data);
        for(let i = 0; i < dataParse.length; i++) {
          this.coffeeHouses[i] = dataParse[i];
        }
      }).catch(err => {console.log('Error: ' + err);}) 
  }

  setCoffeehousesCups()
  {
    this.countCups.length = 10;
    // for(let i = 0; i < this.coffeeHouses.length; i++){
    //   this.countCups.length = +this.coffeeHouses[i]['promoCups'];
    //   for(let j = 0; j < this.countCups.length; j++){
    //     this.countCups[i] = 1;
    //   }
    //   this.coffeeHousesTmp[i] = { coffehousesId: this.coffeeHouses[i]['coffehousesId'], 
    //                               name: this.coffeeHouses[i]['name'],
    //                               description: this.coffeeHouses[i]['description'],
    //                               creatorId: this.coffeeHouses[i]['creatorId'],
    //                               pathLogo: this.coffeeHouses[i]['pathLogo'],
    //                               clients: this.coffeeHouses[i]['clients'],
    //                               promoCups: this.countCups,
    //                               socialNetworks: this.coffeeHouses[i]['socialNetworks']
    //                             }
    //   this.countCups = [];
    // }
    // console.log(this.coffeeHousesTmp);
    
  }


}
