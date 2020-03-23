import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-alert',
  templateUrl: './register-alert.component.html',
  styleUrls: ['./register-alert.component.scss'],
})
export class RegisterAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  closeModal(){
    let alertDiv = document.querySelector('.alert');
    let backgroundDiv = document.querySelector('.background_opacity');

    backgroundDiv.setAttribute('style', "opacity: 0;");
    alertDiv.classList.remove('active');

    setTimeout(() => {
      backgroundDiv.classList.remove('background_active');
      backgroundDiv.setAttribute('style', '');
    }, 500);
    
  }
}
