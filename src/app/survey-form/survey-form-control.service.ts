import { Injectable } from '@angular/core';
import { DataCollectionItemList, DropDownQuestion, QuestionBase, TextareaQuestion } from './survery-form.component.model';
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
          case "SINGLESELDD":
            surveyQuestions.push(
              new DropDownQuestion({
                key: q.id_survey_item.toString(),
                label: q.txt_srvy_item,
                value: q.response_items[0].txt_rspns_client,
                required: q.ind_reqrd == "Y",
                order: 1,                   
                columns: 100,
                options: q.response_items.map((resItem, i) => { return { key: resItem.id_survey_item_response?.toString(),  value: resItem.txt_rspns} })
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
      return new FormGroup(group);
    
  }
}
