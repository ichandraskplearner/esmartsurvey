import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaCompComponent } from './text-area-comp.component';

describe('TextAreaCompComponent', () => {
  let component: TextAreaCompComponent;
  let fixture: ComponentFixture<TextAreaCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaCompComponent]
    });
    fixture = TestBed.createComponent(TextAreaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
