import {
  Box,
  Button,
  Paper,
  SimpleGrid,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import PageTitle from '../../common/components/PageTitle';
import ScrollView from '../../common/components/ScrollView';
import { api } from '../../common/config/api';
import { initialValues, schema } from './schema';
import useStyles from './styles';

export interface IProducts {
  description: string;
  ncm: string;
  some: string;
  fecoep: string;
}

export default function Some() {
  const { classes } = useStyles();
  const [products, setProducts] = useState<IProducts[]>([]);
  const smallScreen = useMediaQuery('(max-width: 900px)');

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: initialValues,
    validateInputOnChange: true,
  });

  useEffect(() => {
    const { ncm } = form.values;
    if (ncm.length >= 4) {
      api.post('/some', { ncm }).then((response) => {
        form.setFieldValue('some', response.data.some);
        form.setFieldValue('fecoep', response.data.fecoep ?? '0');
      });
    }
  }, [form.values]);

  const submit = (values: IProducts) => {
    setProducts([...products, values]);
  };

  return (
    <Box className={classes.component}>
      <Box>
        <PageTitle title="Cálculo de alíquotas" />
        <Title className={classes.subtitle}>
          Preencha os campos e receberá uma sugestão de alíquota
        </Title>
      </Box>
      <Paper shadow="xl" sx={{ height: '75vh' }}>
        <SimpleGrid cols={smallScreen ? 1 : 2} sx={{ height: '100%' }}>
          <Box className={classes.formContainer}>
            <Box className={classes.header}>
              <Title className={classes.headerTitle}>
                INFORMAÇÕES DO PRODUTO
              </Title>
            </Box>
            <form
              className={classes.form}
              onSubmit={form.onSubmit((values) => submit(values))}
            >
              <TextInput
                label="Descrição do produto"
                {...form.getInputProps('description')}
              />
              <SimpleGrid cols={3}>
                <TextInput label="NCM" {...form.getInputProps('ncm')} />
                <TextInput
                  label="Alíquota (%)"
                  disabled={!form.values.description || !form.values.ncm}
                  {...form.getInputProps('some')}
                />
                <TextInput label="FECOEP" {...form.getInputProps('fecoep')} />
              </SimpleGrid>
              <Button
                color="euContribuinteBlue.1"
                type="submit"
                disabled={
                  form.values.description === '' ||
                  form.values.ncm === '' ||
                  form.values.some === ''
                }
              >
                Adicionar produto
              </Button>
            </form>
          </Box>
          <ScrollView products={products} />
        </SimpleGrid>
      </Paper>
    </Box>
  );
}
