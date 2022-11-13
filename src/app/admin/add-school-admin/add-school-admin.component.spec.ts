import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolAdminComponent } from './add-school-admin.component';

describe('AddSchoolAdminComponent', () => {
  let component: AddSchoolAdminComponent;
  let fixture: ComponentFixture<AddSchoolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSchoolAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
