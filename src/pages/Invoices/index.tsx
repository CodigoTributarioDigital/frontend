import { Box, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import MaskInput from '../../common/components/MaskInput';
import MobileTable from '../../common/components/MobileTable';
import PageTitle from '../../common/components/PageTitle';
import Table from '../../common/components/Table';
import { api } from '../../common/config/api';
import { colors } from '../../common/styles/theme/colors';
import { DateMask } from '../../common/utils/masks';
import InvoiceDataTableRows from './InvoiceDataTableRows';
import useStyles from './styles';

export default function Invoices() {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery('(max-width: 1000px)');
  const [currentDate, setCurrentDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const cnpj = localStorage.getItem('EuContribuinte:CNPJ') as string;

  const { data } = useQuery(['invoices'], () =>
    api.get(`/list/${cnpj.replaceAll(/\D/g, '')}/01/2022`)
  );

  return (
    <Box className={classes.component}>
      <Box>
        <PageTitle title="Minhas notas fiscais" />
        <Title
          sx={{ fontSize: '1rem ', color: colors.texts.grey, fontWeight: 600 }}
        >
          Selecione o mês/ano para pesquisar
        </Title>
      </Box>
      <MaskInput
        mask={DateMask}
        placeholder="MM/AAAA"
        onChange={(e) =>
          setCurrentDate({
            ...currentDate,
            month: Number(e.target.value.split('/')[0]),
            year: Number(e.target.value.split('/')[1]),
          })
        }
      />
      {!smallScreen && (
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
          rows={<InvoiceDataTableRows data={data} />}
        />
      )}
      {smallScreen &&
        (data?.data ? (
          data?.data?.map((invoice: any, index: any) => {
            console.log(invoice);

            return (
              <MobileTable
                key={index}
                accessKey={invoice.key}
                date={new Date(invoice.date).toLocaleDateString()}
                issuer={invoice.emit}
                sender={invoice.dest}
                value={Number(invoice.value).toLocaleString('pr-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              />
            );
          })
        ) : (
          <>
            <MobileTable
              accessKey={'NFe00901160010260002140106507391620720500020324'}
              date={'05/01/2022'}
              issuer={'xNome'}
              sender={'xNome'}
              value={'R$ 225,00'}
            />
            <MobileTable
              accessKey={'NFe00901160010260002140106507391620720500020324'}
              date={'05/01/2022'}
              issuer={'xNome'}
              sender={'xNome'}
              value={'R$ 225,00'}
            />
          </>
        ))}
    </Box>
  );
}
