import { createBoard } from '@wixc3/react-board';
import App from '../../App';
import { Products, user } from '../../data';

// temporary stuffs.
const RUBBER_DUCKY = Products[0];
const SCROOGE = user();

export default createBoard({
    name: 'App',
    Board: () => <App products={Products} user={SCROOGE} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 885,
    },
});
