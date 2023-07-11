import { Component, OnInit } from '@angular/core';
import SURVEYAPIDATA from '../api/survey-api-data.json';
import { DataCollection, DataCollectionItemList, QuestionBase } from './survery-form.component.model';
import { SurveyFormService } from '../api/surveyform.service';
import { SurveyFormControlService } from './survey-form-control.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  surveyForm: FormGroup;
  surveyQuestions: QuestionBase<string>[] = [];
  surveyFormContent: DataCollection | undefined;
  surveyFormDataItemCollection: DataCollectionItemList[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private suveryformApi: SurveyFormService,
    private surveyFormControlService: SurveyFormControlService) {
    this.surveyForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.fetchDataFromApi();

    this.surveyQuestions = this.surveyFormControlService.getSurveyQuestions(this.surveyFormDataItemCollection);
    console.log(this.surveyQuestions);
    this.surveyForm = this.surveyFormControlService.getSurveyForm(this.surveyQuestions);
    console.log(this.surveyForm);
  }


  UpdateDataChanges() {

    Object.keys(this.surveyForm.controls).forEach(key => {
      if (this.surveyFormContent != null && this.surveyFormContent != undefined) {
        console.log(key);
        let indexOfDataItem =
          this.surveyFormContent.data_collection_item_list.findIndex((r, i) => 
            r.id_survey_item.toString() === key.toString()
          );
          console.log(indexOfDataItem);
        if (this.surveyFormContent.data_collection_item_list[indexOfDataItem].cd_srvy_item_type == 'NOTE' ||
          this.surveyFormContent.data_collection_item_list[indexOfDataItem].cd_srvy_item_type == 'TEXT') {
            console.log(this.surveyForm.get(key)?.value);
          this.surveyFormContent.data_collection_item_list[indexOfDataItem].response_items[0].txt_rspns_client = this.surveyForm.get(key)?.value;
        }
      }

    });


  }

  fetchDataFromApi() {
    this.suveryformApi.getData().subscribe(result => {
      console.log(result);
      this.surveyFormContent = JSON.parse(JSON.stringify(result)) as DataCollection;
      this.surveyFormDataItemCollection = this.surveyFormContent.data_collection_item_list;
    });
  }

  SubmitSurvey() {
    console.log(this.surveyForm);
    this.UpdateDataChanges();
    this.suveryformApi.postData(this.surveyFormContent);
  }

}
