import { useState } from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { LeftIcon, RightIcon } from './icons';
import React from 'react';

export const Images = ({ images }: { images: React.ReactElement[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = images[activeIndex];
    const findNextIndex = () =>
        activeIndex + 1 >= images.length ? 0 : activeIndex + 1;
    const findPrevIndex = () =>
        activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1;
    console.log(activeIndex);
    return (
        <div className="relative w-30vw">
            <AspectRatio.Root className="relative" key="active" ratio={1 / 1}>
                <button
                    className=" absolute right-0 top-1/2 z-10 mr-2 h-8 w-8"
                    onClick={() => setActiveIndex(findNextIndex())}
                >
                    <RightIcon />
                </button>
                <button
                    className=" absolute left-0 top-1/2 z-10 ml-2 h-8 w-8"
                    onClick={() => setActiveIndex(findPrevIndex())}
                >
                    <LeftIcon />
                </button>

                <div className="h-full bg-gray-med object-cover">
                    {activeImage}
                </div>
            </AspectRatio.Root>
            <div className="my-[10px] mx-5 grid auto-rows-auto grid-cols-5 gap-0">
                {images.map((image, i) => {
                    return (
                        <AspectRatio.Root
                            className={`h-full border-4 rounded m-1
                                ${
                                    i === activeIndex
                                        ? 'border-black'
                                        : 'border-gray-light'
                                }`}
                            key={i}
                            ratio={1 / 1}
                            role="button"
                            onClick={() => setActiveIndex(i)}
                        >
                            {image}
                        </AspectRatio.Root>
                    );
                })}
            </div>
        </div>
    );
};
