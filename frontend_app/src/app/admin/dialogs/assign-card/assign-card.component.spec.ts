import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCardComponent } from './assign-card.component';

describe('AssignCardComponent', () => {
  let component: AssignCardComponent;
  let fixture: ComponentFixture<AssignCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignCardComponent]
    });
    fixture = TestBed.createComponent(AssignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
