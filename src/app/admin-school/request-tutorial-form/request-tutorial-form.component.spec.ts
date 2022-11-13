import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTutorialFormComponent } from './request-tutorial-form.component';

describe('RequestTutorialFormComponent', () => {
  let component: RequestTutorialFormComponent;
  let fixture: ComponentFixture<RequestTutorialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTutorialFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTutorialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
