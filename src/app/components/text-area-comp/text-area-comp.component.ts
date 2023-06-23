import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DataCollectionItemList, ResponseItem } from 'src/app/survey-form/survery-form.component.model';

@Component({
  selector: 'app-text-area-comp',
  templateUrl: './text-area-comp.component.html',
  styleUrls: ['./text-area-comp.component.scss']
})
export class TextAreaCompComponent implements OnChanges {

  textAreaContentData: DataCollectionItemList | undefined;
  textAreaResponseContent: ResponseItem | undefined;

  textAreatText: string = "";
  textAreaCols: number | null = 100;
  textAreaRows: number | null = null;
  textAreaMaxlength: number | null = null
  TextType: string = 'TEXTAREA';


  ngOnChanges(changes: SimpleChanges): void {

    let contentData = changes['TextAreaDataItem'].currentValue as DataCollectionItemList;

    if (contentData != null && contentData != undefined) {

      this.textAreaContentData = contentData;
      this.textAreaRows = this.textAreaContentData.nbr_row;
      this.textAreaMaxlength = this.textAreaContentData.nbr_char;
      this.TextType = this.textAreaContentData.cd_srvy_item_type === 'NOTE' ? 'TEXTAREA' : 'TEXT';

      if (contentData.response_items != null && contentData.response_items != undefined) {
        this.textAreaResponseContent = contentData.response_items.at(0);

        if (this.textAreaResponseContent != null && this.textAreaResponseContent.txt_rspns_client != null && this.textAreaResponseContent.txt_rspns_client != undefined) {
          this.textAreatText = this.textAreaResponseContent.txt_rspns_client;
        }
      }
    }
  }

  @Input()
  TextAreaDataItem: DataCollectionItemList | undefined;

  @Output()
  OnComponentDataChange: EventEmitter<DataCollectionItemList> = new EventEmitter<DataCollectionItemList>();

  OnTextDataChange(data: any) {
    if (this.TextAreaDataItem != null && this.TextAreaDataItem != undefined) {
      if (this.TextAreaDataItem.response_items != null && this.TextAreaDataItem.response_items != undefined && this.TextAreaDataItem.response_items.length > 0) {
        this.TextAreaDataItem.response_items[0].txt_rspns_client = data;
        this.OnComponentDataChange.emit(this.TextAreaDataItem)
      }
    }
    console.log(data);
  }


}
