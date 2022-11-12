import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminRegisComponent } from './add-admin-regis.component';

describe('AddAdminRegisComponent', () => {
  let component: AddAdminRegisComponent;
  let fixture: ComponentFixture<AddAdminRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
