import { createStyles } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

const useStyles = createStyles((theme) => ({
  component: {
    height: '2.7rem',
    minWidth: '22rem',
    border: 0,
    outline: 0,
    backgroundColor: '#EEEEEE',
    borderRadius: '5px',
    paddingLeft: '10px',
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: 'Poppins',
    color: colors.texts.grey,
  },
}));

export default useStyles;
