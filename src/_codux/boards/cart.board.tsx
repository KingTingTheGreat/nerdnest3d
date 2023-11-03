import { createBoard } from '@wixc3/react-board';
import { CartIcon } from '../../components/icons';
import { PRODUCTS } from '../../data';

const RUBBER_DUCKY = PRODUCTS[0];

export default createBoard({
    name: 'Cart',
    Board: () => (
        <div>
            <CartIcon
                cart={[{ product: RUBBER_DUCKY, size: 'S', quantity: 2 }]}
            />
        </div>
    ),
    isSnippet: true,
});
