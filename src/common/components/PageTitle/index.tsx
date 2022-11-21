import { Title } from '@mantine/core';
import useStyles from './styles';

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  const { classes } = useStyles();
  return <Title className={classes.component}>{title}</Title>;
}
