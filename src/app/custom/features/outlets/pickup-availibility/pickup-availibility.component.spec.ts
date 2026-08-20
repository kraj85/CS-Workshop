import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupAvailibility } from './pickup-availibility.component';

describe('PickupAvailibility', () => {
  let component: PickupAvailibility;
  let fixture: ComponentFixture<PickupAvailibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickupAvailibility],
    }).compileComponents();

    fixture = TestBed.createComponent(PickupAvailibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
