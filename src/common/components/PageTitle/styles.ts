import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    fontSize: '2rem',
    fontWeight: 700,
    fontFamily: 'Poppins',
    color: colors.texts.dark,
  },
}));

export default useStyles;
