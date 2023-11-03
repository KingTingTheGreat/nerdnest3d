import { createBoard } from '@wixc3/react-board';
import { Images } from '../../components/images';
import { PRODUCTS } from '../../data';

const RUBBER_DUCKY = PRODUCTS[0];

export default createBoard({
    name: 'Images',
    Board: () => (
        <div>
            <Images images={RUBBER_DUCKY.images} />
        </div>
    ),
    environmentProps: {
        canvasWidth: 400,
    },
    isSnippet: true,
});
