
import { HStack, IconButton } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { TableSystemPaginatorPages } from './Table-system-pages';

export function TableSystemPaginator({
  totalItems,
  itemsPerPage = 10,
  currentPage,
  pagesToShow = 4,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  pagesToShow?: number;
  onPageChange: (newPage: number) => void;
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  function calculateNumberPages() {
    const blockSize = pagesToShow;
    const blockNumber = Math.ceil(currentPage / blockSize);
    const newFirstGroupPage = (blockNumber - 1) * blockSize + 1;
    const pages: any[] = [];

    for (let i = newFirstGroupPage; i <= totalPages; i++) {
      if (i === newFirstGroupPage && i < totalPages && i !== 1) {
        pages.push('...');
      }
      if (i >= newFirstGroupPage && i <= newFirstGroupPage + pagesToShow - 1) {
        pages.push(i);
      }
      if (i === newFirstGroupPage + pagesToShow - 1 && i < totalPages) {
        pages.push('...');
        break;
      }
    }
    return pages;
  }

  return (
    <div className="paginator">
      <ul className="pagination">
        <HStack>
          <IconButton
            size="sm"
            isDisabled={currentPage === 1}
            aria-label="first page"
            icon={<ArrowLeftIcon boxSize={3} />}
            onClick={() => handlePageChange(1)}
          />
          <IconButton
            size="sm"
            isDisabled={currentPage === 1}
            aria-label="previous page"
            icon={<ChevronLeftIcon boxSize={5} />}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          <TableSystemPaginatorPages
            activePage={currentPage}
            pages={calculateNumberPages()}
            onPageChange={(newPage) => handlePageChange(newPage)}
          />
          <IconButton
            size="sm"
            isDisabled={currentPage === totalPages}
            aria-label="next page"
            icon={<ChevronRightIcon boxSize={5} />}
            onClick={() => handlePageChange(currentPage + 1)}
          />
          <IconButton
            size="sm"
            isDisabled={currentPage === totalPages}
            aria-label="last page"
            icon={<ArrowRightIcon boxSize={3} />}
            onClick={() => handlePageChange(totalPages)}
          />
        </HStack>
      </ul>
    </div>
  );
}
