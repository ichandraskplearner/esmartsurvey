import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import SURVEYAPIDATA from './survey-api-data.json';

@Injectable({
    providedIn: 'root',
})
export class SurveyFormService {

    constructor(private http: HttpClient) { }

    getData() : Observable<any> {
        return of(SURVEYAPIDATA["surveyContent"]);
        return this.http.get<any>('');
    }
}