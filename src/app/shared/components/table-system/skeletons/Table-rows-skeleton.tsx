import { Skeleton, Tbody, Td, Tr } from '@chakra-ui/react';
import { TableSystemColumn } from '../Table-system.models';

export function TableSystemRowsSkeleton({ rowsNumber, columns }: { rowsNumber: number; columns: TableSystemColumn[] }) {
  return (
    <Tbody>
      {[...Array(rowsNumber)].map((_, index) => (
        <Tr key={index}>
          {columns.map((column) => (
            <Td key={column.data.key}>
              <Skeleton height={4} width={Math.floor(Math.random() * (100 - 50 + 1) + 50) + 1 + '%'} />
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
}
