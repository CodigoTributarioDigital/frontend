import { Box, Grid, SimpleGrid, Title } from '@mantine/core';
import { FileDownload } from 'tabler-icons-react';
import { colors } from '../../styles/theme/colors';
import IconButton from '../IconButton';

export default function MobileTable() {
  return (
    <Box
      sx={{
        borderTop: `1px solid ${colors.primary.light}`,
        borderBottom: `1px solid ${colors.primary.light}`,
        padding: '1.3rem 0',
      }}
    >
      <Grid>
        <Grid.Col span={5}>
          <Box>
            <b>
              <Title sx={{ fontSize: '1.3rem', color: colors.primary.light }}>
                CHAVE DE ACESSO
              </Title>
            </b>
            <Title sx={{ fontSize: '1.2rem', color: colors.texts.grey }}>
              02/10/2022
            </Title>
          </Box>
        </Grid.Col>
        <Grid.Col span={5}>
          <Box>
            <b>
              <Title sx={{ fontSize: '1.4rem', color: colors.primary.light }}>
                emitente
              </Title>
            </b>
            <Title sx={{ fontSize: '1.2rem', color: colors.texts.grey }}>
              remetente
            </Title>
            <Title sx={{ fontSize: '1.2rem', color: colors.texts.grey }}>
              vALOR
            </Title>
          </Box>
        </Grid.Col>
        <Grid.Col span={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton tooltip="Abrir PDF" Icon={FileDownload} />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
