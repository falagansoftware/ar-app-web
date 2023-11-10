import { Button, HStack } from '@chakra-ui/react';


export function TableSystemPaginatorPages({
  pages,
  activePage,
  onPageChange,
}: {
  pages: any[];
  activePage: number;
  onPageChange: (newPage: number) => void;
}) {
  function handlePageChange(newPage: number) {
    onPageChange(newPage);
  }

  function setActivePage(page: number) {
    return activePage === page ? 'solid' : 'outline';
  }

  return (
    <HStack>
      {pages.map((page, index) => {
        if (page === '...') {
          return <span key={index}>...</span>;
        } else {
          return (
            <Button
              key={index}
              size="sm"
              aria-label="page"
              variant={setActivePage(page)}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          );
        }
      })}
    </HStack>
  );
}
