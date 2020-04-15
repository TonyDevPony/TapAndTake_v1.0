import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminCoffeeHousesPage } from './admin-coffee-houses.page';

describe('AdminCoffeeHousesPage', () => {
  let component: AdminCoffeeHousesPage;
  let fixture: ComponentFixture<AdminCoffeeHousesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCoffeeHousesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCoffeeHousesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
