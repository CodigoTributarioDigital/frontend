import { Box, Title } from '@mantine/core';
import { MoodSad } from 'tabler-icons-react';
import { colors } from '../../styles/theme/colors';

interface INoResults {
  message: string;
}

export default function NoResults({ message }: INoResults) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.3rem',
      }}
    >
      <MoodSad
        style={{ width: '8rem', height: '8rem', color: colors.primary.light }}
      />
      <Title
        sx={{
          color: colors.primary.light,
          fontSize: '1.7rem',
          fontWeight: 800,
          maxWidth: '30rem',
          textAlign: 'center',
        }}
      >
        {message}
      </Title>
    </Box>
  );
}
