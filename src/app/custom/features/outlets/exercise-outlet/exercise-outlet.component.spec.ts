import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOutlet } from './exercise-outlet.component';

describe('ExerciseOutlet', () => {
  let component: ExerciseOutlet;
  let fixture: ComponentFixture<ExerciseOutlet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseOutlet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
