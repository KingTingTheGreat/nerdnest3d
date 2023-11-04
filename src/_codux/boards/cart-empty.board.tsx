import { createBoard } from '@wixc3/react-board';
import { CartIcon } from '../../components/icons';
import { Products } from '../../data';

const RUBBER_DUCKY = Products[0];

export default createBoard({
    name: 'Cart (empty)',
    Board: () => (
        <div>
            <CartIcon cart={[]} />
        </div>
    ),
    isSnippet: true,
});
