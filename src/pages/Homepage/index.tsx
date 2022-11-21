import { Anchor, Box, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { openModal as openMantineModal } from '@mantine/modals';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowNarrowLeft } from 'tabler-icons-react';
import vector from '../../assets/home.svg';
import logo1 from '../../assets/logo1.svg';
import FileAccepted from '../../common/components/FileAccepted';
import FileInput from '../../common/components/FileInput';
import Logo from '../../common/components/Logo';
import MaskInput from '../../common/components/MaskInput';
import OptionButton from '../../common/components/OptionButton';
import { CNPJMask } from '../../common/utils/masks';
import { initialValues, schema } from './schema';
import useStyles from './styles';

export default function HomePage() {
  const { classes } = useStyles({ vector });
  const [formIsActive, setFormIsActive] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: initialValues,
    validateInputOnChange: true,
  });

  const submit = () => {
    setFormIsActive(false);
    localStorage.setItem('EuContribuinte:CNPJ', form.values.cnpj);
  };

  const hasCNPJ = localStorage.getItem('EuContribuinte:CNPJ');

  useEffect(() => {
    hasCNPJ ? setFormIsActive(false) : setFormIsActive(true);
  }, [hasCNPJ]);

  useEffect(() => {
    const cnpj = form.values.cnpj.replaceAll(/\D/g, '');
    if (cnpj.length === 14 && Object.keys(form.errors).length === 0) submit();
  }, [form.values.cnpj]);

  const Options = () => {
    const navigate = useNavigate();

    const back = () => {
      setFormIsActive(true);
      localStorage.removeItem('EuContribuinte:CNPJ');
    };

    const openModal = () => {
      openMantineModal({
        centered: true,
        title: !accepted ? 'Faça upload da sua EFD' : null,
        children: <>{accepted ? <FileAccepted /> : <FileInput />}</>,
      });
    };

    return (
      <Box className={classes.options}>
        <Title className={classes.title}>Escolha a opção desejada:</Title>
        <OptionButton onClick={() => navigate('/invoices')}>
          Quero ver minhas notas fiscais
        </OptionButton>
        <OptionButton onClick={openModal}>
          Quero verificar minha EFD
        </OptionButton>
        <OptionButton>Quero calcular meu PGDAS</OptionButton>
        <OptionButton>Quero ajuda com as alíquotas</OptionButton>
        <Anchor className={classes.anchor} onClick={back}>
          <ArrowNarrowLeft /> quero inserir o CNPJ novamente!
        </Anchor>
      </Box>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.bgColor} />
      <Box className={classes.container}>
        <Box className={classes.leftFrame}>
          <img src={logo1} alt="eucontribuinte" className={classes.logo} />
        </Box>
        <Box className={classes.rightFrame}>
          {formIsActive ? (
            <Box className={classes.titleContainer}>
              <Title className={classes.title}>Seja bem-vindo ao</Title>
              <Logo />
              <Title className={classes.labelInput}>
                Insira seu CNPJ para prosseguir:
              </Title>
              <form>
                <MaskInput
                  mask={CNPJMask}
                  placeholder="00.000.000/0000-00"
                  {...form.getInputProps('cnpj')}
                />
              </form>
            </Box>
          ) : (
            <Options />
          )}
        </Box>
      </Box>
    </Box>
  );
}
