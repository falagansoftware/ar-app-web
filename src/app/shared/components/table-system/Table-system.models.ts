export interface TableSystemColumn {
  header: string;
  headerTranslate?: boolean;
  data: {
    key: string;
    type: TableSystemColumnType;
    dateFormat?: string;
  };
  sortable?: boolean;
  filter?: {
    type: TableSystemColumnFilterType;
    options?: any[];
  };
}

export enum TableSystemColumnFilterType {
  DROPDOWN = 'dropdown',
  DATE = 'date',
  RANGE_DATE = 'range_date',
  TEXT = 'text',
}

export enum TableSystemColumnType {
  STRING = 'string',
  NUMBER = 'number',
  DATE = 'date',
  BOOLEAN = 'boolean',
}

export enum TableSystemSortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export interface TableSystemSort {
  sortBy: string | null;
  sortOrder: TableSystemSortOrder | null;
}

export interface TableSystemConfig {
  columns: TableSystemColumn[];
  rowDataKey: string;
  itemsPerPage: number;
  pagesToShow: number;
  defaultSort: TableSystemSort;
}
