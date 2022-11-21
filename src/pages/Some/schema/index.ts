import * as Yup from 'yup';

const schema = Yup.object().shape({
  description: Yup.string().required('É necessário preencher esse campo!'),
  ncm: Yup.string().required('É necessário preencher esse campo!'),
  some: Yup.string().required('É necessário preencher esse campo!'),
});

const initialValues = {
  description: '',
  ncm: '',
  some: '',
};

export { schema, initialValues };
