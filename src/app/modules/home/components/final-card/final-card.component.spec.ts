import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCardComponent } from './final-card.component';

describe('FinalCardComponent', () => {
  let component: FinalCardComponent;
  let fixture: ComponentFixture<FinalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
