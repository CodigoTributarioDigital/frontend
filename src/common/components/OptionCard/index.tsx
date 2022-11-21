import { Box, Title } from '@mantine/core';
import useStyles from './styles';

interface IOptionCard {
  description: string;
  ncm: string;
  some: string;
}

export default function OptionCard({ description, ncm, some }: IOptionCard) {
  const { classes } = useStyles();
  return (
    <Box className={classes.component}>
      <Title className={classes.title}>{description}</Title>
      <Box className={classes.subtitles}>
        <Title className={classes.subtitle}>NCM: {ncm}</Title>
        <Title className={classes.subtitle}>Alíquota: {some}%</Title>
      </Box>
    </Box>
  );
}
