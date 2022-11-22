import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    borderCollapse: 'collapse',
    maxWidth: '100vw',
  },
  head: {
    backgroundColor: colors.texts.light,
    height: '3.75rem',
    borderRadius: '5px',
    color: colors.background,
    fontWeight: 700,
    textAlign: 'left',
  },
  td: {
    textAlign: 'left',
    padding: '.5rem',
  },
  th: {
    textAlign: 'left',
    fontWeight: 500,
    color: colors.texts.grey,
    padding: '.5rem',
  },
  body: {
    height: '5rem',
  },
}));

export default useStyles;
