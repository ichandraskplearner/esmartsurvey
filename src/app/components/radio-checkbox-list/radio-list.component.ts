import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DataCollectionItemList, ResponseItem } from 'src/app/survey-form/survery-form.component.model';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent implements OnChanges {

  @Input()
  MultiSelectionData: DataCollectionItemList | undefined;

  @Output()
  OnSelectionDataChanges: EventEmitter<DataCollectionItemList> = new EventEmitter<DataCollectionItemList>();

  dataItemType: string = 'checkbox';

  dataItemCollection: ResponseItem[] = [];
  dataItemClearSelectionEnabled: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    let radioDataCollection =
      changes['MultiSelectionData'].currentValue as DataCollectionItemList;

    if (radioDataCollection != null && radioDataCollection != undefined) {
      this.dataItemType = radioDataCollection.cd_srvy_item_type === 'CHECKBOX' ? 'checkbox' : 'radio';
      this.MultiSelectionData = radioDataCollection;
      this.dataItemClearSelectionEnabled = radioDataCollection.ind_reqrd != "True";
      this.dataItemCollection = radioDataCollection.response_items as ResponseItem[];
    }
  }

  clearAllSelection() {
    this.dataItemCollection.forEach((v, i) => {
      v.ind_selected = "";
    });
    this.MakeUpdates();
  }

  selectionChanged(data: any, indexValue: number) {
    console.log(data);

    if (this.dataItemType === 'checkbox') {
      this.dataItemCollection[indexValue].ind_selected = data.srcElement.checked === true ? "Y" : "";
    }
    else {
      this.dataItemCollection.forEach((v, i) => {
        if (i == indexValue) {
          v.ind_selected = "Y";
        }
        else {
          v.ind_selected = "";
        }
      });
    }

    console.log(this.dataItemCollection);

    this.MakeUpdates();
  }

  private MakeUpdates() {
    if (this.MultiSelectionData != null && this.MultiSelectionData != undefined) {
      this.MultiSelectionData.response_items = this.dataItemCollection;
      this.OnSelectionDataChanges.emit(this.MultiSelectionData);
    }
  }
}
