import { Button, ButtonProps } from '@mantine/core';
import useStyles from './styles';

interface IButton extends ButtonProps {
  backgroundColor?: string;
}

export default function OptionButton(props: IButton) {
  const { backgroundColor } = props;
  const { classes } = useStyles({ backgroundColor });
  return (
    <Button
      variant="filled"
      color={'red'}
      className={classes.component}
      {...props}
    />
  );
}
