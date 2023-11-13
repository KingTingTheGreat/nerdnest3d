import img1 from './pen-replacement-1.webp';
import img2 from './pen-replacement-2.webp';
import img3 from './pen-replacement-3.webp';
import React from 'react';
import { Product } from '@/types';
import Image from 'next/image';

const images: React.ReactElement[] = [
    <Image
        src={img1}
        alt="Pen Replacement 1"
        className="w-full h-full object-cover"
        key="1"
    />,
    <Image
        src={img2}
        alt="Pen Replacement 2"
        className="w-full h-full object-cover"
        key="2"
    />,
    <Image
        src={img3}
        alt="Pen Replacement 3"
        className="w-full h-full object-cover"
        key="3"
    />,
];

export const PEN_REPLACEMENT: Product = {
    id: '1003',
    name: 'Pen Replacement',
    summary: 'Customize the look of your 4 color Bic pen!',
    description:
        'Customize the look of your 4 color Bic pen with these replacement body parts.',
    features: [
        'Customize your pen',
        'Glows in the dark',
        'better grip',
        'cool',
    ],
    preview: images[0],
    images: images,
    reviews: [
        {
            rating: 5,
            text: 'Made my pen very easy to find!',
            date: new Date(2023, 6, 13).valueOf(),
        },
        { rating: 5, date: new Date(2023, 4, 10).valueOf() },
        {
            rating: 4,
            text: 'Very good grip. The texture makes me uncomfortable though.',
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 1,
            text: 'Useless. Did not fit.',
            date: new Date(2022, 12, 15).valueOf(),
        },
        { rating: 4, date: new Date(2022, 11, 11).valueOf() },
    ],
    price: 8.95,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['glow green', 'white', 'black', 'blue'],
};
