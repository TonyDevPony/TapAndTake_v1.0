import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserCoffeHouseInfoPage } from './user-coffe-house-info.page';

describe('UserCoffeHouseInfoPage', () => {
  let component: UserCoffeHouseInfoPage;
  let fixture: ComponentFixture<UserCoffeHouseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoffeHouseInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCoffeHouseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
