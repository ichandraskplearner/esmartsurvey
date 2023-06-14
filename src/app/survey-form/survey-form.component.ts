import { Component, OnInit } from '@angular/core';
import SURVEYAPIDATA from '../api/survey-api-data.json';
import { DataCollection, DataCollectionItemList } from './survery-form.component.model';
import { SurveyFormService } from '../api/surveyform.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  surveyFormContent: DataCollection | undefined;
  surveyFormDataItemCollection: DataCollectionItemList[] = [];

  constructor(private suveryformApi: SurveyFormService) {
  }

  ngOnInit(): void {    
    this.fetchDataFromApi();
  }


  fetchDataFromApi() {
    this.suveryformApi.getData().subscribe(result => {
      console.log(result);
        this.surveyFormContent = JSON.parse(JSON.stringify(result)) as DataCollection;
        this.surveyFormDataItemCollection = this.surveyFormContent.data_collection_item_list;
    });
  }

}
