export interface DataCollection {

    id_survey: number

    id_survey_language: number

    cd_lang: string

    id_registration_client: number

    nm_registration_client: string

    id_registration_clent_survey: number

    ind_saved_by_client: string

    id_task_and_alert: number

    id_registration: number

    nm_survey: string

    migrated_results: string

    ind_dirty: number

    cd_role: string

    cd_contract_status: string

    ind_readonly: string

    data_collection_item_list: DataCollectionItemList[]

}

export interface DataCollectionItemList {

    id_survey_item: number

    id_survey_language: number

    cd_srvy_item_type: string

    nbr_char: number

    nbr_row: number

    cd_srvy_group: string

    nbr_sort_order: number

    ind_reqrd: string

    txt_srvy_item: string

    nm_srvy_item: string

    item_error_message: any

    txt_invalid_date: any

    response_items: ResponseItem[]

}

export interface ResponseItem {

    id_survey_item_response?: number

    id_survey_item?: number

    txt_rspns?: string

    txt_rspns_value?: string

    nbr_sort_order?: number

    id_regstrtn_clnt_srvy_rspns?: number

    id_registration_client_survey?: number

    txt_rspns_client?: string

    dt_rspns: any

    ind_selected?: string

}

export class QuestionBase<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string | undefined, value: string | undefined}[];
    columns: number = 100;
    rows?: number;
    maxlength?: number;
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: {key: string | undefined, value: string | undefined }[];  
        columns?: number;
        rows?: number;
        maxlength?: number;     
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
      this.columns = options.columns || 100;
      this.rows = options.rows;
      this.maxlength = options.maxlength;
    }
}

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}

export class TextareaQuestion extends QuestionBase<string> {
    override controlType = 'textarea';
  }

export class DropDownQuestion extends QuestionBase<string> {
    override controlType = 'dropdown';
  }