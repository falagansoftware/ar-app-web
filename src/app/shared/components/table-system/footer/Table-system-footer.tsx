import { TableSystemPaginationSkeleton } from '../skeletons/Pagination-skeleton';
import { Center, Td, Tfoot, Tr } from '@chakra-ui/react';
import { TableSystemPaginator } from '../paginator/Table-system-paginator';


export function TableSystemFooter({
  columnsNumber,
  itemsPerPage,
  pagesToShow,
  data,
  currentPage,
  loading,
  onPageChange,
}: {
  columnsNumber: number;
  itemsPerPage: number;
  pagesToShow: number;
  data: { result: any[]; total: number };
  currentPage: number;
  loading: boolean;
  onPageChange: (newPage: number) => void;
}) {
  if (loading) {
    return <TableSystemPaginationSkeleton columnsNumber={columnsNumber} />;
  }
  return (
    <Tfoot>
      <Tr>
        <Td colSpan={columnsNumber}>
          <Center>
            <TableSystemPaginator
              currentPage={currentPage}
              totalItems={data.total}
              itemsPerPage={itemsPerPage}
              pagesToShow={pagesToShow}
              onPageChange={(newPage: number) => onPageChange(newPage)}
            ></TableSystemPaginator>
          </Center>
        </Td>
      </Tr>
    </Tfoot>
  );
}
