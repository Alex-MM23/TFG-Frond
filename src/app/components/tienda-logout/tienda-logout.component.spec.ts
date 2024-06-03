import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaLogoutComponent } from './tienda-logout.component';

describe('TiendaLogoutComponent', () => {
  let component: TiendaLogoutComponent;
  let fixture: ComponentFixture<TiendaLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
