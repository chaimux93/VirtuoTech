import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceStatusComponent } from './presence-status.component';

describe('PresenceStatusComponent', () => {
  let component: PresenceStatusComponent;
  let fixture: ComponentFixture<PresenceStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceStatusComponent]
    });
    fixture = TestBed.createComponent(PresenceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
