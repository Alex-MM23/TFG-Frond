import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasLogoutComponent } from './tarifas-logout.component';

describe('TarifasLogoutComponent', () => {
  let component: TarifasLogoutComponent;
  let fixture: ComponentFixture<TarifasLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifasLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifasLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
