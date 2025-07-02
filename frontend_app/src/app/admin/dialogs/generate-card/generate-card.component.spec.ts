import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCardComponent } from './generate-card.component';

describe('GenerateCardComponent', () => {
  let component: GenerateCardComponent;
  let fixture: ComponentFixture<GenerateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateCardComponent]
    });
    fixture = TestBed.createComponent(GenerateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
