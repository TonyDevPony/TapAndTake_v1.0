import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BussinessInfoPage } from './bussiness-info.page';

describe('BussinessInfoPage', () => {
  let component: BussinessInfoPage;
  let fixture: ComponentFixture<BussinessInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BussinessInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
