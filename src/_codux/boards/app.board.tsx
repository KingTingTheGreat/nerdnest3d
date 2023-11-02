import { createBoard } from '@wixc3/react-board';
import App from '../../App';
import { PRODUCTS, user } from '../../data';

// temporary stuffs.
const RUBBER_DUCKY = PRODUCTS[0];
const SCROOGE = user()

export default createBoard({
    name: 'App',
    Board: () => <App products={PRODUCTS} user={SCROOGE} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 885
    }
});
