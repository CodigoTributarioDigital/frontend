import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: colors.texts.light,
  },
  icon: {
    width: '10rem',
    height: '10rem',
    color: colors.texts.light,
  },
}));

export default useStyles;
