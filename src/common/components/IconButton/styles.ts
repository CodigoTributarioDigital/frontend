import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: colors.primary.light,
    width: '2.625rem',
    height: '2.625rem',
    color: 'white',
    border: 'none',
    outline: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
}));

export default useStyles;
