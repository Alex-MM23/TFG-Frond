import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoLogoutComponent } from './contacto-logout.component';

describe('ContactoLogoutComponent', () => {
  let component: ContactoLogoutComponent;
  let fixture: ComponentFixture<ContactoLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
