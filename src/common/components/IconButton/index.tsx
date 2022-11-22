import { Button, ButtonProps, Tooltip } from '@mantine/core';
import useStyles from './styles';

interface IButton extends ButtonProps {
  Icon: any;
  tooltip: string;
}

export default function IconButton(props: IButton) {
  const { classes } = useStyles();
  const { Icon, tooltip } = props;

  return (
    <Tooltip label={tooltip}>
      <button className={classes.button}>{<Icon size={'100%'} />}</button>
    </Tooltip>
  );
}
