import { TestBed } from '@angular/core/testing';

import { SurveyFormControlService } from './survey-form-control.service';

describe('SurveyFormServiceService', () => {
  let service: SurveyFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
