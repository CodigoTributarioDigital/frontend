import { Box, Title } from '@mantine/core';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import MaskInput from '../../common/components/MaskInput';
import PageTitle from '../../common/components/PageTitle';
import { api } from '../../common/config/api';
import { colors } from '../../common/styles/theme/colors';
import { DateMask } from '../../common/utils/masks';
import { chartColors, datasets, labels } from './chart';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PGDAS() {
  const [currentDate, setCurrentDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const cnpj = localStorage.getItem('EuContribuinte:CNPJ') as string;
  // const { data } = useQuery(['PGDAS'], () =>
  //   api.get(`/pgda/${cnpj.replaceAll(/\D/g, '')}`)
  // );

  const Card = ({
    title,
    value = 'R$ XXX,XX',
  }: {
    title: string;
    value?: string;
  }) => {
    return (
      <Box
        sx={{
          width: '19.25rem',
          height: '13rem',
          boxShadow: ' 0px 4px 10px rgba(0, 0, 0, 0.3)',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Title
          sx={{
            fontSize: '2rem',
            fontWeight: 600,
            color: colors.primary.dark,
          }}
        >
          {title}
        </Title>
        <Title
          sx={{
            fontSize: '1.8rem',
            fontWeight: 600,
            color: colors.texts.light,
          }}
        >
          {value}
        </Title>
      </Box>
    );
  };

  const { mutate } = useMutation(
    () => {
      return api.post(`/pgda/${cnpj.replaceAll(/\D/g, '')}`, {
        year_income: 180000,
      });
    },
    {
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  useEffect(() => {
    mutate();
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
        <PageTitle title="Cálculo do PGDA ( Documento de Arrecadação do Simples Nacional)" />
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3.75rem',
        }}
      >
        <Card title="Valor Final" />
        <Card title="Renda B.M" />
        <Card title="Alíquota Efetiva" />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PageTitle title="Distribuição dos impostos" />
        <br />
        <Box
          style={{
            width: '100%',
            height: '20rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Title sx={{ fontSize: '1rem', fontWeight: 500 }}>
            Porcentagem emitida na Xº Faixa
          </Title>
          <Doughnut
            style={{ width: '100%', height: '20rem' }}
            data={{
              labels: labels,
              datasets: datasets,
            }}
            options={{
              plugins: {
                legend: { display: false },
              },
            }}
          />
          <Box>
            {chartColors.map((obj: any) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '10px',
                    backgroundColor: obj.color,
                    borderRadius: '10%',
                  }}
                />
                <Title sx={{ fontSize: '1rem' }}>{obj.label} - R$ xxx,xx</Title>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
