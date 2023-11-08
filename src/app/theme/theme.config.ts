import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const globalStyles = {
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
        height: '100vh',
      },
      code: {
        'font-family': "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
      },
    },
  },
};

export const theme = extendTheme(
  globalStyles,
  withDefaultColorScheme({
    colorScheme: 'gray',
  }),
);
