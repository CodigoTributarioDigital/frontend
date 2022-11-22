import { Box, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { FileDownload } from 'tabler-icons-react';
import IconButton from '../../common/components/IconButton';
import MaskInput from '../../common/components/MaskInput';
import PageTitle from '../../common/components/PageTitle';
import Table, { IObjects } from '../../common/components/Table';
import { colors } from '../../common/styles/theme/colors';
import { DateMask } from '../../common/utils/masks';
import MissingFilesDataTableRows from './MissingFilesDataTableRows';

const header = [
  {
    value: 'teste',
    label: 'Chave de Acesso',
  },
  {
    value: 'teste',
    label: 'Data de Emissão',
  },
  {
    value: 'teste',
    label: 'Emitente',
  },
  {
    value: 'teste',
    label: 'Remetente',
  },
  {
    value: 'teste',
    label: 'Valor',
  },
  {
    value: 'teste',
    label: '',
  },
] as IObjects[];

const rows = [
  {
    value: 'teste',
    label: 'Chave de Acesso',
  },
  {
    value: 'teste',
    label: 'Data de Emissão',
  },
  {
    value: 'teste',
    label: 'Emitente',
  },
  {
    value: 'teste',
    label: 'Remetente',
  },
  {
    value: 'teste',
    label: 'Valor',
  },
  {
    value: '',
    label: <IconButton tooltip="Abrir PDF" Icon={FileDownload} />,
  },
] as IObjects[];

export default function MissingFiles() {
  const [efds, setEfds] = useState([]);

  useEffect(() => {
    const efd = localStorage.getItem('EFD');
    if (!efd) return;
    setEfds(JSON.parse(efd).data)
  }, []);

  return (
    <Box
      sx={{
        padding: '2rem 3rem 2rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <Box>
        <PageTitle title="Oops... :(" />
        <Title
          sx={{ fontSize: '1rem ', color: colors.texts.grey, fontWeight: 600 }}
        >
          Identificamos que existem documentos faltando:
        </Title>
      </Box>
      <Table
        header={
          <>
            <th>Chave de Acesso</th>
            <th>Data de Emissão</th>
            <th>Emitente</th>
            <th>Remetente</th>
            <th>Valor</th>
            <th></th>
          </>
        }
        rows={<MissingFilesDataTableRows data={efds} />}
      />
    </Box>
  );
}
