import { createStyles } from '@mantine/core';
import { colors } from '../../common/styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    padding: '2rem 3rem 2rem 3rem',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '4rem 2rem 1rem 1rem',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  subtitle: {
    fontSize: '1rem ',
    color: colors.texts.grey,
    fontWeight: 600,
  },
  header: {
    width: '100%',
    backgroundColor: colors.primary.light,
    height: '5rem',
    borderRadius: '4px 4px 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.background,
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  form: {
    width: '50%',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: '70%',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: '90%',
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.8rem',
  },
}));

export default useStyles;
