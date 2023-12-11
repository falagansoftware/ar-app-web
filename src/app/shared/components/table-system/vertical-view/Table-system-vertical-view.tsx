import { Avatar, Box, HStack, Wrap, WrapItem } from '@chakra-ui/react';

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
    <Box overflowY="auto" maxHeight="calc(100vh - 180px)">
      {data.result.map((row: any) => (
        <HStack spacing={4} key={row.uid} marginTop={2} borderWidth={1} boxShadow="md" rounded={8} padding={2}>
          <Box>
            <Avatar size={'sm'} bg="teal.500" color={'white'} name={row['name'] + ' ' + row['surname']} />
          </Box>
          <Box>
            <Wrap padding={2} spacing={2}>
              {columns.map((column: any) => {
                return (
                  <WrapItem key={column.data.key}>
                    {column.header}: {row[column.data.key]}
                  </WrapItem>
                );
              })}
            </Wrap>
          </Box>
        </HStack>
      ))}
    </Box>
  );
}
