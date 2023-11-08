import { TableSystemColumn } from '../Table-system.models';
import { Skeleton, Stack } from '@chakra-ui/react';

export function TableRowsVerticalSkeleton({ columns }: { columns: TableSystemColumn[] }) {
  return (
    <Stack>
      {columns.map((column, index) => (
        <Skeleton height="20px" key={index} />
      ))}
    </Stack>
  );
}
