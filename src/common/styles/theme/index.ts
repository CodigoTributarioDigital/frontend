import { MantineThemeOverride } from '@mantine/core';
import { colors } from './colors';

const theme: MantineThemeOverride = {
  colors: {
    euContribuinteBlue: [
      colors.primary.main,
      colors.primary.light,
      colors.primary.dark,
    ],
  },
  primaryColor: 'euContribuinteBlue',
  fontFamily: 'Poppins',
};

export { theme };
