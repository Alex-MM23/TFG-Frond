import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionLogoutComponent } from './planificacion-logout.component';

describe('PlanificacionLogoutComponent', () => {
  let component: PlanificacionLogoutComponent;
  let fixture: ComponentFixture<PlanificacionLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificacionLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificacionLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
