import { Component, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { QuestionBase } from '../survey-form/survery-form.component.model';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss']
})
export class SurveyQuestionComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { 
    return this.form.controls[this.question.key].untouched || this.form.controls[this.question.key].valid;
   }

  clearAllSelection(controlKey: any) {
    debugger;
    this.form.get(controlKey)?.setValue(null);
  }

}
