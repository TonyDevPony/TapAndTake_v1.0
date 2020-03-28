import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {

  };

  @ViewChild('mySlider', {static: false}) slides: IonSlides;
  constructor() {}

  setButton(){
    new Promise((resolve, reject) => {
      resolve(this.slides.getActiveIndex())
    }).then(
      result => this.changeButtonColor(result)
    );
    return true;
  }
  changeButtonColor(buttonNumb){
    if(buttonNumb === 0){
      document.getElementById('favorites').classList.value = 'choise_button active';
      document.getElementById('coffee_house').classList.value = 'choise_button';
    }
    if(buttonNumb === 1){
      document.getElementById('coffee_house').classList.value = 'choise_button active';
      document.getElementById('favorites').classList.value = 'choise_button';
    }
  }

  viewFavorites(){
    this.slides.slideTo(0, 600);
    this.changeButtonColor(0);
    return true;
  }
  viewCoffeeHouses(){
    this.slides.slideTo(1, 600);
    this.changeButtonColor(1);
    return true;
  }

}
