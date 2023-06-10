import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataCollectionItemList, ResponseItem } from 'src/app/survey-form/survery-form.component.model';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent implements OnChanges {

  @Input()
  RadioListDataItem: DataCollectionItemList | undefined;

  dataItemCollection: ResponseItem[] = [];
  dataItemClearSelectionEnabled: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    let radioDataCollection =
      changes['RadioListDataItem'].currentValue as DataCollectionItemList;

    if (radioDataCollection != null && radioDataCollection != undefined) {
      this.RadioListDataItem = radioDataCollection;
      this.dataItemClearSelectionEnabled = radioDataCollection.ind_reqrd != "True";
      this.dataItemCollection = radioDataCollection.response_items as ResponseItem[];
      console.log(radioDataCollection['response_items']);
    }
  }

}
