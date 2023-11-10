import { Box, List, ListItem } from '@chakra-ui/react';

import { TableRowsVerticalSkeleton } from '../skeletons/Table-rows-vertical-skeleton';

export function TableSystemVerticalView({
  columns,
  data,
  loading,
}: {
  columns: any;
  data: { result: any[]; total: number };
  loading: boolean;
}) {
  if (loading) {
    return <TableRowsVerticalSkeleton columns={columns} />;
  }
  return (
    <>
      {data.result.map((row: any) => (
        <Box key={row.uid} borderWidth="1px" marginTop={3}>
          <List spacing={3}>
            {columns.map((column: any) => {
              return <ListItem key={column.data.key}>{row[column.data.key]}</ListItem>;
            })}
          </List>
        </Box>
      ))}
    </>
  );
}
