import { Component, OnInit } from '@angular/core';
import SURVEYAPIDATA from '../api/survey-api-data.json';
import { DataCollection, DataCollectionItemList } from './survery-form.component.model';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  surveyFormContent: DataCollection = JSON.parse(JSON.stringify(SURVEYAPIDATA["surveyContent"])) as DataCollection;
  surveyFormDataItemCollection: DataCollectionItemList[] = [];
  
  constructor() {
  }

  ngOnInit(): void {
    console.log(JSON.stringify(SURVEYAPIDATA["surveyContent"]));
    console.log(JSON.parse(JSON.stringify(SURVEYAPIDATA["surveyContent"])) as DataCollection);
    this.surveyFormDataItemCollection = this.surveyFormContent.data_collection_item_list;
  }

}
