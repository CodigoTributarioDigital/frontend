import { Title } from '@mantine/core';
import useStyles from './styles';

interface IErrorMessage {
  message: string;
}

export default function ErrorMessage({ message }: IErrorMessage) {
  const { classes } = useStyles();
  return <Title className={classes.component}>{message}</Title>;
}
