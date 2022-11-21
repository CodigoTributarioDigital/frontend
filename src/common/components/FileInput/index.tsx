import { Box, Title } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { FileUpload } from 'tabler-icons-react';
import { colors } from '../../styles/theme/colors';

export default function FileInput() {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      sx={{ height: '20rem' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(20rem - 32px)',
        }}
      >
        <FileUpload color={colors.texts.grey} size={100} />
        <Title
          sx={{
            fontSize: '1.8rem',
            fontWeight: 600,
            color: colors.primary.main,
          }}
        >
          Faça Upload
        </Title>
        <Title
          sx={{
            fontSize: '1.2rem',
            fontWeight: 400,
            color: colors.primary.light,
          }}
        >
          Ou arraste um arquivo
        </Title>
      </Box>
    </Dropzone>
  );
}
