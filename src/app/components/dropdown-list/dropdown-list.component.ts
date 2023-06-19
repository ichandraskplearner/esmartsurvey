import { Component, Input, SimpleChanges } from '@angular/core';
import { DataCollectionItemList, ResponseItem } from 'src/app/survey-form/survery-form.component.model';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent {

  @Input()
  DropDownDataItem: DataCollectionItemList | undefined;

  optionItemCollection: ResponseItem[] = [];

  ngOnChanges(changes: SimpleChanges) {
    let dropdownData =
      changes['DropDownDataItem'].currentValue as DataCollectionItemList;

    if (dropdownData != null && dropdownData != undefined) {
      this.DropDownDataItem = dropdownData;      
      this.optionItemCollection = dropdownData.response_items as ResponseItem[];      
    }
  }
}
