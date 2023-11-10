import { TableSystemColumn } from '../Table-system.models';
import { Skeleton, Stack } from '@chakra-ui/react';

export function TableRowsVerticalSkeleton({ columns }: { columns: TableSystemColumn[] }) {
  return (
    <Stack>
      {columns.map((column) => (
        <Skeleton height="20px" key={column.data.key} />
      ))}
    </Stack>
  );
}
