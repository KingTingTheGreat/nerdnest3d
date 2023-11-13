import img1 from './rubber-ducky-1.webp';
import img2 from './rubber-ducky-2.webp';
import img3 from './rubber-ducky-3.webp';
import img4 from './rubber-ducky-4.webp';
import img5 from './rubber-ducky-5.webp';
import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';

const images: React.ReactElement[] = [
    <Image
        src={img1}
        alt="Rubber Ducky 1"
        className="w-full h-full object-cover"
        key="1"
    />,
    <Image
        src={img2}
        alt="Rubber Ducky 2"
        className="w-full h-full object-cover"
        key="2"
    />,
    <Image
        src={img3}
        alt="Rubber Ducky 3"
        className="w-full h-full object-cover"
        key="3"
    />,
    <Image
        src={img4}
        alt="Rubber Ducky 4"
        className="w-full h-full object-cover"
        key="4"
    />,
    <Image
        src={img5}
        alt="Rubber Ducky 5"
        className="w-full h-full object-cover"
        key="5"
    />,
];

export const RUBBER_DUCKY: Product = {
    id: '1234',
    name: 'Rubber Ducky',
    summary: 'Always have a friends to talk to with this duck on your desk!',
    description:
        'Always have someone to talk to and help debug your code with this rubber ducky on your desk.',
    features: [
        'Always listens to you',
        'Never judges you',
        'Helps you become the best coder you can be',
        'Floats',
    ],
    preview: images[0],
    images: images,
    reviews: [
        {
            rating: 5,
            text: 'So impressed!',
            date: new Date(2023, 6, 13).valueOf(),
        },
        { rating: 5, date: new Date(2023, 4, 10).valueOf() },
        {
            rating: 4,
            text: 'Pretty good duck. I just wish it came with sunglasses.',
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 1,
            text: 'Useless. Did not fix my bug :(',
            date: new Date(2022, 12, 15).valueOf(),
        },
        { rating: 4, date: new Date(2022, 11, 11).valueOf() },
        {
            rating: 3,
            text: 'Meh, ok I guess',
            date: new Date(2022, 10, 30).valueOf(),
        },
    ],
    price: 9.95,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['yellow'],
};
