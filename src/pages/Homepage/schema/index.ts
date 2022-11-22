import * as Yup from 'yup';
import { cnpjValidation } from '../../../common/utils/functions';

const schema = Yup.object().shape({
  cnpj: Yup.string()
    // .test({
    //   message: 'O CNPJ informado é inválido!',
    //   test: (value: any, context) => {
    //     const isValid = cnpjValidation(value);
    //     if (!isValid) context?.createError();
    //     return isValid;
    //   },
    // })
    .required('É necessário preencher esse campo!'),
});

const initialValues = {
  cnpj: '',
};

export { schema, initialValues };
