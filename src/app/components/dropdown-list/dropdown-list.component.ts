import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DataCollectionItemList, ResponseItem } from 'src/app/survey-form/survery-form.component.model';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent {

  @Input()
  DropDownDataItem: DataCollectionItemList | undefined;

  @Output()
  OnSelectionDataChanges: EventEmitter<DataCollectionItemList> = new EventEmitter<DataCollectionItemList>();

  optionItemCollection: ResponseItem[] = [];
  dataItemClearSelectionEnabled: boolean = true;

  selectedOptionItem: any;

  ngOnChanges(changes: SimpleChanges) {
    let dropdownData =
      changes['DropDownDataItem'].currentValue as DataCollectionItemList;

    if (dropdownData != null && dropdownData != undefined) {
      this.DropDownDataItem = dropdownData;
      this.optionItemCollection = dropdownData.response_items as ResponseItem[];
      this.dataItemClearSelectionEnabled = dropdownData.ind_reqrd != "True";
    }
  }

  OnSelectionOptionChange(selectedData: any) {
    this.selectedOptionItem = selectedData;
    this.optionItemCollection.forEach((v, i) => {
      if (v.id_survey_item_response == selectedData) {
        v.ind_selected = "Y";
      }
      else {
        v.ind_selected = "";
      }
    });
    console.log(selectedData);
  }

  private MakeUpdates() {
    if (this.DropDownDataItem != null && this.DropDownDataItem != undefined) {
      this.DropDownDataItem.response_items = this.optionItemCollection;
      this.OnSelectionDataChanges.emit(this.DropDownDataItem);
    }
  }

  clearAllSelection() {
    this.selectedOptionItem = "";
    this.optionItemCollection.forEach((v, i) => {
      v.ind_selected = "";
    });
    this.MakeUpdates();
  }
}
