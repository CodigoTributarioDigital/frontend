import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    width: '95%',
    border: `2px solid ${colors.primary.light}`,
    '&:hover': {
      border: `2px solid ${colors.primary.dark}`,
      cursor: 'pointer',
    },
    borderRadius: '10px',
    padding: '2.2rem 1rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 500,
    color: colors.texts.dark,
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: colors.texts.grey,
  },
  subtitles: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
