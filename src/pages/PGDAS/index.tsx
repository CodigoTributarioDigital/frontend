import { Box, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { FileDownload } from 'tabler-icons-react';
import IconButton from '../../common/components/IconButton';
import PageTitle from '../../common/components/PageTitle';
import Table, { IObjects } from '../../common/components/Table';
import { api } from '../../common/config/api';
import { colors } from '../../common/styles/theme/colors';
import PGDASDataTableRows from './PGDASDataTableRows';

export default function PGDAS() {
  const cnpj = localStorage.getItem('EuContribuinte:CNPJ') as string;
  const { data } = useQuery(['PGDAS'], () =>
    api.get(`/pgda/${cnpj.replaceAll(/\D/g, '')}`)
  );

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
        <PageTitle title="Cálculo do PGDAS" />
        <Title
          sx={{ fontSize: '1rem ', color: colors.texts.grey, fontWeight: 600 }}
        >
          Verificar texto:
        </Title>
      </Box>
      <Title
        sx={{ fontSize: '1rem ', color: colors.texts.grey, fontWeight: 600 }}
      >
        Arrecadação bruta:{' '}
        {Number(data?.data?.total).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Title>
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
        rows={<PGDASDataTableRows data={data} />}
      />
    </Box>
  );
}
