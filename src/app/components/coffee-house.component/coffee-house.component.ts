import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coffee-house',
  templateUrl: './coffee-house.component.html',
  styleUrls: ['./coffee-house.component.scss'],
})
export class CoffeeHouseComponent implements OnInit {

  path_to_empty_cups = "background-image: url('../../../assets/img/cards/cups/full/empty_cups.svg')";
  path_to_full_cups = "background-image: url('../../../assets/img/cards/cups/full/cups_full.svg')";
  // Общая инфа о кофейне
  coffeeHouses = [
    {
      id_coffeehouse: 1, 
      promotional_cups: 10,
    },
    {
      id_coffeehouse: 2, 
      promotional_cups: 7,
    },
    {
      id_coffeehouse: 3, 
      promotional_cups: 8,
    },
    {
      id_coffeehouse: 4, 
      promotional_cups: 10,
    },
    {
      id_coffeehouse: 5, 
      promotional_cups: 7,
    },
    {
      id_coffeehouse: 6, 
      promotional_cups: 8,
    },
    {
      id_coffeehouse: 7, 
      promotional_cups: 10,
    },
    {
      id_coffeehouse: 8, 
      promotional_cups: 7,
    },
    {
      id_coffeehouse: 9, 
      promotional_cups: 8,
    },
    {
      id_coffeehouse: 10, 
      promotional_cups: 10,
    },
  ];
  // Инфа о кофейне с привязкой к юзеру
  coffeeCups = [
    {
      id_coffeehouse: 1,
      cups_bought: 6,
    },
    {
      id_coffeehouse: 7,
      cups_bought: 10,
    },    
    {
      id_coffeehouse: 8,
      cups_bought: 3,
    },
    {
      id_coffeehouse: 9,
      cups_bought: 4,
    },
    {
      id_coffeehouse: 10,
      cups_bought: 6,
    },
  ];

  coffeeCupsTest = [
    {is_full: true},
    {is_full: true},
    {is_full: true},
    {is_full: true},
    {is_full: true},
    {is_full: false},
    {is_full: false},
    {is_full: false},
    {is_full: false},
    {is_full: false},
  ]

  constructor() { }

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
  }


}
