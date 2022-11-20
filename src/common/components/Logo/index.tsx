import { Box, Title } from '@mantine/core';
import useStyles from './styles';

export default function Logo() {
  const { classes } = useStyles();
  return (
    <Box className={classes.logo}>
      <Title className={classes.firstText}>eu</Title>
      <Title className={classes.secondText}>contribuinte</Title>
    </Box>
  );
}
