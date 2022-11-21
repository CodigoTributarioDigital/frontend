import { Button, ButtonProps } from '@mantine/core';
import useStyles from './styles';

interface IButton extends ButtonProps {
  backgroundColor?: string;
  onClick?: (e: any) => void;
}

export default function OptionButton(props: IButton) {
  const { backgroundColor, onClick } = props;
  const { classes } = useStyles({ backgroundColor });
  return (
    <Button
      onClick={onClick}
      variant="filled"
      color={'red'}
      className={classes.component}
      {...props}
    />
  );
}
