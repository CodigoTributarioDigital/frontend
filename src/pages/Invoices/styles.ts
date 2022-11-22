import { createStyles } from '@mantine/core';
import { colors } from '../../common/styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    padding: '2rem 3rem 2rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      padding: '4rem 2rem 1rem 2rem',
    },
  },
  input: {
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: '100%',
    },
  },
}));

export default useStyles;
