import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistRequestComponent } from './assist-request.component';

describe('AssistRequestComponent', () => {
  let component: AssistRequestComponent;
  let fixture: ComponentFixture<AssistRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
