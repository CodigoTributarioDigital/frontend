import { Box, Title } from '@mantine/core';
import { colors } from '../../styles/theme/colors';

interface IMobileTable {
  accessKey: string;
  date: string;
  issuer: string;
  sender: string;
  value: string;
}

export default function MobileTable({
  accessKey,
  date,
  issuer,
  sender,
  value,
}: IMobileTable) {
  return (
    <Box
      sx={{
        borderTop: `1px solid ${colors.primary.light}`,
        borderBottom: `1px solid ${colors.primary.light}`,
        padding: '1.3rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '.8rem',
      }}
    >
      <Title
        sx={{
          fontSize: '1.3rem',
          width: '100%',
          color: colors.primary.light,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {accessKey}
      </Title>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title
          sx={{
            fontSize: '1.3rem',
            width: '100%',
            color: colors.texts.grey,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {date}
        </Title>
        <Title
          sx={{
            fontSize: '1.3rem',
            width: '100%',
            color: colors.texts.grey,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {issuer}
        </Title>
        <Title
          sx={{
            fontSize: '1.3rem',
            width: '100%',
            color: colors.texts.grey,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {sender}
        </Title>
        <Title
          sx={{
            fontSize: '1.3rem',
            width: '100%',
            color: colors.texts.grey,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {value}
        </Title>
      </Box>
    </Box>
  );
}
