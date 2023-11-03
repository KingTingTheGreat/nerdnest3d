import { createBoard } from '@wixc3/react-board';
import { ProductInfo } from '../../components/product-info';
import { PRODUCTS } from '../../data';

const RUBBER_DUCKY = PRODUCTS[0];

export default createBoard({
    name: 'Product info',
    Board: () => (
        <div>
            <ProductInfo product={RUBBER_DUCKY} addToCart={console.log} />
        </div>
    ),
    isSnippet: true,
});
