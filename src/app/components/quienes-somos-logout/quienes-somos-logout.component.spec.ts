import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosLogoutComponent } from './quienes-somos-logout.component';

describe('QuienesSomosLogoutComponent', () => {
  let component: QuienesSomosLogoutComponent;
  let fixture: ComponentFixture<QuienesSomosLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesSomosLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesSomosLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
