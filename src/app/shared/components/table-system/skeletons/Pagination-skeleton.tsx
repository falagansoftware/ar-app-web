import { Center, HStack, Skeleton, Td, Tfoot, Tr } from '@chakra-ui/react';


export function TableSystemPaginationSkeleton({ columnsNumber }: { columnsNumber: number }) {
  return (
    <Tfoot>
      <Tr>
        <Td colSpan={columnsNumber}>
          <Center>
            <HStack>
              {[...Array(5)].map((_, index) => (
                <Skeleton key={index} height={6} width={6} />
              ))}
            </HStack>
          </Center>
        </Td>
      </Tr>
    </Tfoot>
  );
}
