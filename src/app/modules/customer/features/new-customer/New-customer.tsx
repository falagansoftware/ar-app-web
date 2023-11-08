import './New-customer.css';
import { Box, ButtonGroup, Flex, Heading, IconButton, SimpleGrid, Spacer } from '@chakra-ui/react';
import React from 'react';
import { CheckIcon } from '@chakra-ui/icons';

export function NewCustomer() {
  return (
    <SimpleGrid columns={1} spacing={25}>
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Nuevo cliente</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <IconButton variant="ghost" aria-label="Add to friends" icon={<CheckIcon />} />
          </ButtonGroup>
        </Flex>
      </Box>
      <Box height={80}></Box>
    </SimpleGrid>
  );
}
