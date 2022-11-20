import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  logo: {
    display: 'flex',
    gap: '0.1rem',
  },
  firstText: {
    color: colors.texts.light,
    fontWeight: 500,
  },
  secondText: {
    color: colors.texts.light,
    fontWeight: 800,
  },
}));

export default useStyles;
