import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSchoolComponent } from './admin-school.component';

describe('AdminSchoolComponent', () => {
  let component: AdminSchoolComponent;
  let fixture: ComponentFixture<AdminSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
