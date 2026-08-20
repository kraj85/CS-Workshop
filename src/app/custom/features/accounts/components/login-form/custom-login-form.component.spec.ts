import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoginForm } from './custom-login-form.component';

describe('CustomLoginForm', () => {
  let component: CustomLoginForm;
  let fixture: ComponentFixture<CustomLoginForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLoginForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLoginForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
