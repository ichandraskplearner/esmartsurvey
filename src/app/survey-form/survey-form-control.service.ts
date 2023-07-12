import { Injectable } from '@angular/core';
import { CheckboxQuestion, DataCollectionItemList, DividelineQuestion, DropDownQuestion, HeadingQuestion, InstrQuestion, NumericTextboxQuestion, QuestionBase, RadiobuttonQuestion, TextareaQuestion, TextboxQuestion } from './survery-form.component.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SurveyFormControlService {

  constructor() { }

  getSurveyQuestions(questionCollection: DataCollectionItemList[]): QuestionBase<string>[] {

    let surveyQuestions: QuestionBase<string>[] = [];

    if (questionCollection != null && questionCollection != undefined && questionCollection.length) {
      questionCollection.forEach((q, i) => {

        switch(q.cd_srvy_item_type)
        {
          case "NOTE":
            surveyQuestions.push(
              new TextareaQuestion({
                key: q.id_survey_item.toString(),
                label: q.txt_srvy_item,
                value: q.response_items[0].txt_rspns_client,
                required: q.ind_reqrd == "Y",
                order: 1,   
                columns: 100,                       
                rows: q.nbr_row,
                maxlength: q.nbr_char
              })
            );
          break;          
          case "TEXT":
            surveyQuestions.push(
              new TextboxQuestion({
                key: q.id_survey_item.toString(),
                label: q.txt_srvy_item,
                value: q.response_items[0].txt_rspns_client,
                required: q.ind_reqrd == "Y",
                order: 1,   
                columns: 100,                       
                rows: q.nbr_row,
                maxlength: q.nbr_char
              })
            );
          break;
          case "NUMERIC":
            surveyQuestions.push(
              new NumericTextboxQuestion({
                key: q.id_survey_item.toString(),
                label: q.txt_srvy_item,
                value: q.response_items[0].txt_rspns_client,
                required: q.ind_reqrd == "Y",
                order: 1,   
                columns: 100,                       
                rows: q.nbr_row,
                maxlength: q.nbr_char
              })
            );
          break;            
          case "SINGLESEL":
            surveyQuestions.push(
              new RadiobuttonQuestion({
                key: q.id_survey_item.toString(),
                label: q.txt_srvy_item,
                value: q.response_items[0].txt_rspns_client || '',
                required: q.ind_reqrd == "Y",
                order: 1,                   
                columns: 100,
                options: q.response_items.map((resItem, i) => { return { key: resItem.id_survey_item_response?.toString(),  value: resItem.txt_rspns} })
              })
            );
          break;
          case "CHECKBOX":
            surveyQuestions.push(
              new CheckboxQuestion({
                key: q.id_survey_item.toString(),
                label: q.txt_srvy_item,
                value: q.response_items[0].txt_rspns_client || '',
                required: q.ind_reqrd == "Y",
                order: 1,                   
                columns: 100,
                options: q.response_items.map((resItem, i) => { return { key: resItem.id_survey_item_response?.toString(),  value: resItem.txt_rspns} })
              })
            );
          break;
          case "SINGLESELDD":
            surveyQuestions.push(
              new DropDownQuestion({
                key: q.id_survey_item.toString(),
                label: q.txt_srvy_item,
                value: q.response_items[0].txt_rspns_client || '',
                required: q.ind_reqrd == "Y",
                order: 1,                   
                columns: 100,
                options: q.response_items.map((resItem, i) => { return { key: resItem.id_survey_item_response?.toString(),  value: resItem.txt_rspns} })
              })
            );
          break;
          case "HEADING":
            surveyQuestions.push(
              new HeadingQuestion({
                key: q.id_survey_item.toString(),
                label: '',
                value: q.txt_srvy_item,
                required: false,
                order: 1,   
                columns: 100,                       
                rows: 0,
                maxlength: 100
              })
            );
          break;
          case "DIVIDELINE":
            surveyQuestions.push(
              new DividelineQuestion({
                key: q.id_survey_item.toString(),
                label: '',
                value: '',
                required: false,
                order: 1,   
                columns: 100,                       
                rows: 0,
                maxlength: 100
              })
            );
          break;
          case "INSTR":
            surveyQuestions.push(
              new InstrQuestion({
                key: q.id_survey_item.toString(),
                label: '',
                value: q.txt_srvy_item,
                required: false,
                order: 1,   
                columns: 100,                       
                rows: 0,
                maxlength: 100
              })
            );
          break;
        }
       
      });
    }


    return surveyQuestions;
  }

  getSurveyForm(questions: QuestionBase<string>[]) {    
      const group: any = {};
  
      questions.forEach(question => {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                : new FormControl(question.value || '');
      });
      return new FormGroup(group, {'updateOn': 'submit'});
    
  }
}
