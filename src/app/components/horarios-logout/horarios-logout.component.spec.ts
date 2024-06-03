import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosLogoutComponent } from './horarios-logout.component';

describe('HorariosLogoutComponent', () => {
  let component: HorariosLogoutComponent;
  let fixture: ComponentFixture<HorariosLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
