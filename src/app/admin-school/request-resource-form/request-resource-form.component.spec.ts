import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResourceFormComponent } from './request-resource-form.component';

describe('RequestResourceFormComponent', () => {
  let component: RequestResourceFormComponent;
  let fixture: ComponentFixture<RequestResourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestResourceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
