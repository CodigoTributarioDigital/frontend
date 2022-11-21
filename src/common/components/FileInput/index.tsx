import { Box, Title } from '@mantine/core';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import { FileUpload } from 'tabler-icons-react';
import { colors } from '../../styles/theme/colors';

export default function FileInput(props: DropzoneProps) {
  return (
    <Dropzone maxSize={3 * 1024 ** 2} sx={{ height: '20rem' }} {...props}>
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
