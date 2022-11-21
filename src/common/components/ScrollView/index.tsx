import { Box } from '@mantine/core';
import { IProducts } from '../../../pages/Some';
import OptionCard from '../OptionCard';
import useStyles from './styles';

interface IScrollView {
  products: IProducts[];
}

export default function ScrollView({ products }: IScrollView) {
  const { classes } = useStyles();
  return (
    <Box className={classes.component}>
      {products &&
        products.map((product: IProducts, index: number) => (
          <OptionCard
            key={index}
            description={product.description}
            ncm={product.ncm}
            some={product.some}
          />
        ))}
    </Box>
  );
}
