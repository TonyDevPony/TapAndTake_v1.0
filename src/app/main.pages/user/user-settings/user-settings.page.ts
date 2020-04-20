import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {
  pickerOPTS: any;
  mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  constructor(private keyboard: Keyboard) { }

  ngOnInit() {

    // Set hidden to bottom text when keyboard is show
    this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
    this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });

    // Change style of ion-select-option after this did load 
    document.querySelector('ion-select').addEventListener('click', function select() {
      setTimeout(() => {
        let action_sheet = document.querySelectorAll('.action-sheet-button-inner.sc-ion-action-sheet-md');
        (action_sheet[action_sheet.length - 1] as HTMLElement).style.color = '#FBA232';
        action_sheet
          .forEach(
            item => { 
              (item as HTMLElement).style.justifyContent = 'center'; 
          });
      }, 200);
    });
  }

}
