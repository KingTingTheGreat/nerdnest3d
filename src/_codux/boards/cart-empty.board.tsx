import { createBoard } from '@wixc3/react-board';
import { CartIcon } from '../../components/icons';
import { PRODUCTS } from '../../data';

const RUBBER_DUCKY = PRODUCTS[0];

export default createBoard({
    name: 'Cart (empty)',
    Board: () => (
        <div>
            <CartIcon cart={[]} />
        </div>
    ),
    isSnippet: true,
});
