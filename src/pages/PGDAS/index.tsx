import { Box, Title } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import MaskInput from '../../common/components/MaskInput';
import PageTitle from '../../common/components/PageTitle';
import { api } from '../../common/config/api';
import { colors } from '../../common/styles/theme/colors';
import { DateMask } from '../../common/utils/masks';
import { chartColors, datasets, labels } from './chart';
import useStyles from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PGDAS() {
  const { classes } = useStyles();
  const [currentDate, setCurrentDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const cnpj = localStorage.getItem('EuContribuinte:CNPJ') as string;

  const Card = ({
    title,
    value = 'R$ XXX,XX',
  }: {
    title: string;
    value?: string;
  }) => {
    return (
      <Box className={classes.card}>
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

  const { mutate, data } = useMutation(
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
    <Box className={classes.component}>
      <Box className={classes.titleContainer}>
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
      <Box className={classes.cardContainer}>
        <Card
          title="Valor Final"
          value={Number(data?.data?.final_value).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        />
        <Card
          title="Renda B.M"
          value={Number(data?.data?.monthly_income).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        />
        <Card
          title="Alíquota Efetiva"
          value={`${data?.data?.effective_some}%`}
        />
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
        <Box className={classes.chartContainer}>
          <Title sx={{ fontSize: '1rem', fontWeight: 500 }}>
            Porcentagem emitida na {data?.data?.tribute_range}º Faixa
          </Title>
          <Doughnut
            style={{ maxWidth: '50rem', maxHeight: '50rem' }}
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
                <Title sx={{ fontSize: '1rem' }}>
                  {obj.label} -{' '}
                  {Number(data?.data[`${obj.key}_value`]).toLocaleString(
                    'pt-br',
                    {
                      style: 'currency',
                      currency: 'BRL',
                    }
                  )}
                </Title>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
