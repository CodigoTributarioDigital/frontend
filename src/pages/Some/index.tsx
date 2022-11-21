import {
  Box,
  Button,
  Paper,
  SimpleGrid,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useState } from 'react';
import PageTitle from '../../common/components/PageTitle';
import ScrollView from '../../common/components/ScrollView';
import { initialValues, schema } from './schema';
import useStyles from './styles';

export interface IProducts {
  description: string;
  ncm: string;
  some: string;
}

export default function Some() {
  const { classes } = useStyles();
  const [products, setProducts] = useState<IProducts[]>([]);

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: initialValues,
    validateInputOnChange: true,
  });

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
        <SimpleGrid cols={2} sx={{ height: '100%' }}>
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
              <SimpleGrid cols={2}>
                <TextInput label="NCM" {...form.getInputProps('ncm')} />
                <TextInput
                  label="Alíquota (%)"
                  disabled={!form.values.description || !form.values.ncm}
                  {...form.getInputProps('some')}
                />
              </SimpleGrid>
              <Button color="euContribuinteBlue.1" type="submit">
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
