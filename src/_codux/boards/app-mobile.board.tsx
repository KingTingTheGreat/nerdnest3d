import { createBoard } from '@wixc3/react-board';
import App from '../../App';
import { Products, user } from '../../data';

export default createBoard({
    name: 'App (mobile)',
    Board: () => <App products={Products} user={user()} />,
    environmentProps: {
        windowWidth: 400,
    },
    isSnippet: true,
});
