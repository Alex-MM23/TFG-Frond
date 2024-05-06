import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLogoutComponent } from './dashboard-logout.component';

describe('DashboardLogoutComponent', () => {
  let component: DashboardLogoutComponent;
  let fixture: ComponentFixture<DashboardLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
