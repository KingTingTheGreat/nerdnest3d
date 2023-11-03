import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import type { Image } from '../types';

export const Preview = ({ image }: { image: Image }) => {
    return (
        <div className="relative w-full">
            <AspectRatio.Root className="relative" key="active" ratio={1 / 1}>
                <img
                    className="h-full bg-gray-med object-cover max-width-xs"
                    src={image.url}
                    alt={image.alt || image.title}
                />
            </AspectRatio.Root>
        </div>
    );
};