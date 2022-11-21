import * as Yup from 'yup';

const schema = Yup.object().shape({
  description: Yup.string().required('É necessário preencher esse campo!'),
  ncm: Yup.string().required('É necessário preencher esse campo!'),
  some: Yup.string(),
  fecoep: Yup.string().nullable(),
});

const initialValues = {
  description: '',
  ncm: '',
  some: '',
  fecoep: '',
};

export { schema, initialValues };
