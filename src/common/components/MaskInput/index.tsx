import { Box } from '@mantine/core';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';
import ErrorMessage from '../ErrorMessage';
import useStyles from './styles';

interface IMaskInput extends MaskedInputProps {
  error?: string;
}

export default function MaskInput(props: IMaskInput) {
  const { classes } = useStyles();
  const { error } = props;

  return (
    <Box>
      <MaskedInput {...props} className={classes.component} />
      {Boolean(error) && <ErrorMessage message={error ?? ''} />}
    </Box>
  );
}
