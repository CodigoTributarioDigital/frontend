import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  component: {
    padding: '2rem 3rem 2rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.8rem',
  },

  card: {
    width: '19.25rem',
    height: '13rem',
    boxShadow: ' 0px 4px 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3.75rem',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  chartContainer: {
    width: '100%',
    height: '20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '4rem',
    },
  },
}));

export default useStyles;
