import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    maxHeight: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: colors.primary.light,
      borderRadius: '30px',
    },
  },
}));

export default useStyles;
