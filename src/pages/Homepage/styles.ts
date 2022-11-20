import { createStyles } from '@mantine/core';
import { colors } from '../../common/styles/theme/colors';

interface IStyles {
  vector: any;
}

const useStyles = createStyles((theme, { vector }: IStyles) => ({
  component: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${vector})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    display: 'flex',
  },
  bgColor: {
    height: '100%',
    width: '100%',
    background:
      'linear-gradient(127.07deg, rgba(11, 168, 204, 0.97) 9.13%, rgba(5, 120, 165, 0.97) 81.21%)',
    opacity: 0.95,
    position: 'relative',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  logo: {
    width: '26rem',
  },
  leftFrame: {
    width: 'calc(100vw - 52.5vw)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightFrame: {
    width: '52.5vw',
    backgroundColor: colors.background,
    borderRadius: '25px 0 0 25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  },
  title: {
    fontWeight: 800,
    fontSize: '2rem',
    color: colors.texts.dark,
  },
  labelInput: {
    color: colors.texts.grey,
    fontSize: '1.25rem',
    fontWeight: 400,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  anchor: {
    display: 'flex',
    alignItems: 'center',
    color: colors.texts.grey,
    ':hover': {
      color: colors.primary.main,
    },
  },
}));

export default useStyles;
