import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioListComponent } from './radio-list.component';

describe('RadioListComponent', () => {
  let component: RadioListComponent;
  let fixture: ComponentFixture<RadioListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioListComponent]
    });
    fixture = TestBed.createComponent(RadioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
