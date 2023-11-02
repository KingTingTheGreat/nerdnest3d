import { createBoard } from '@wixc3/react-board';
import App from '../../App';
import { PRODUCTS, user } from '../../data';

export default createBoard({
    name: 'App (mobile)',
    Board: () => <App products={PRODUCTS} user={user()} />,
    environmentProps: {
        windowWidth: 400,
    },
    isSnippet: true,
});
