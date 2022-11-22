import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

interface IStyles {
  backgroundColor?: string;
}

const useStyles = createStyles(
  (theme, { backgroundColor = colors.primary.light }: IStyles) => ({
    component: {
      backgroundColor,
      borderRadius: '50px',
      minWidth: '22rem',
      minHeight: '3rem',
      ':hover': {
        backgroundColor,
        opacity: '.9',
      },
    },
  })
);

export default useStyles;
