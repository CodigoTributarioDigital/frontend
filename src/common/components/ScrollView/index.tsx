import { Box } from '@mantine/core';
import { IProducts } from '../../../pages/Some';
import NoResults from '../NoResults';
import OptionCard from '../OptionCard';
import useStyles from './styles';

interface IScrollView {
  products: IProducts[];
}

export default function ScrollView({ products }: IScrollView) {
  const { classes } = useStyles();
  return (
    <Box className={classes.component}>
      {products.length > 0 ? (
        products.map((product: IProducts, index: number) => (
          <OptionCard
            key={index}
            description={product.description}
            ncm={product.ncm}
            some={product.some}
            fecoep={product.fecoep ?? '0'}
          />
        ))
      ) : (
        <NoResults message="Você ainda não adicionou nenhum produto!" />
      )}
    </Box>
  );
}
