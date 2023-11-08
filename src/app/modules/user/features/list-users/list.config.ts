import {
  TableSystemColumnType,
  TableSystemConfig,
} from '../../../../shared/components/table-system/Table-system.models';

export const USERS_TABLE_CONFIG: TableSystemConfig = {
  rowDataKey: 'uid',
  itemsPerPage: 2,
  pagesToShow: 4,
  defaultSort: {
    sortBy: null,
    sortOrder: null,
  },
  columns: [
    {
      header: 'Nombre',
      headerTranslate: false,
      data: {
        key: 'name',
        type: TableSystemColumnType.STRING,
      },
      sortable: false,
    },
    {
      header: 'Apellido',
      headerTranslate: false,
      data: {
        key: 'surname',
        type: TableSystemColumnType.STRING,
      },
      sortable: true,
    },
    {
      header: 'Email',
      headerTranslate: false,
      data: {
        key: 'email',
        type: TableSystemColumnType.STRING,
      },
      sortable: true,
    },
  ],
};
