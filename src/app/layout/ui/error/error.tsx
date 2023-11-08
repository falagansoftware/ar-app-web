import { InfoIcon, WarningIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Center, Flex, Heading, HStack, Text } from '@chakra-ui/react';

export enum ERRORS_LEVELS {
  INFO = 'info',
  WARN = 'warn',
  CRITICAL = 'critical',
}

type ErrorProps = {
  title: string;
  level: ERRORS_LEVELS;
  message: string;
};

export default function Error(props: ErrorProps) {
  return (
    <Center position="absolute" top={0} right={0} left={0} bottom={0}>
      <Flex direction={'column'}>
        <HStack>
          {setIconByErrorLevel(props.level)}
          <Heading as="h4" size="md">
            {props.title}
          </Heading>
        </HStack>
        <Text pl="8" pt="2">
          {props.message}
        </Text>
      </Flex>
    </Center>
  );
}

function setIconByErrorLevel(level: ERRORS_LEVELS) {
  const iconByLevel = {
    [ERRORS_LEVELS.WARN]: <WarningIcon color={'yellow'} w={6} h={6}></WarningIcon>,
    [ERRORS_LEVELS.INFO]: <InfoIcon color={'blue.100'} w={6} h={6}></InfoIcon>,
    [ERRORS_LEVELS.CRITICAL]: <WarningTwoIcon color={'red'} w={6} h={6}></WarningTwoIcon>,
  };
  return iconByLevel[level];
}
