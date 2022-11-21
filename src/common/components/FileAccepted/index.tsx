import { Box, Title } from '@mantine/core';
import { Check } from 'tabler-icons-react';
import useStyles from './styles';

export default function FileAccepted() {
  const { classes } = useStyles();
  return (
    <Box className={classes.component}>
      <Title className={classes.title}>Sua Solicitação foi concluída!</Title>
      <Check className={classes.icon} />
      <Title className={classes.title}>
        Todos os documentos necessários estão corretos
      </Title>
    </Box>
  );
}
