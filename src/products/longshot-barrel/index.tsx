import img1 from './longshot-barrel-1.webp';
import img2 from './longshot-barrel-2.webp';
import React from 'react';
import { Product } from '@/types';
import Image from 'next/image';

const images: React.ReactElement[] = [
    <Image
        src={img1}
        alt="Longshot Barrel 1"
        className="w-full h-full object-cover"
        key="1"
    />,
    <Image
        src={img2}
        alt="Longshot Barrel 2"
        className="w-full h-full object-cover"
        key="2"
    />,
];

export const LONGSHOT_BARREL: Product = {
    id: '2995',
    name: 'Xshot Longshot Barrel',
    summary: 'Install a longer barrel in your blaster!',
    description:
        'Allows you to install a longer barrel Xshot Longshot blaster, improving accuracy and fps.',
    features: [
        'Use a longer barrel',
        'Increase fps',
        'Improve accuracy',
        'Easier to aim',
        'Quick installation',
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
            text: 'Big performance improvement.',
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 3,
            text: 'Works well. Difficult to install',
            date: new Date(2022, 12, 15).valueOf(),
        },
        { rating: 4, date: new Date(2022, 11, 11).valueOf() },
        {
            rating: 5,
            text: 'Great performance improvement. Very easy to install.',
            date: new Date(2022, 10, 30).valueOf(),
        },
        {
            rating: 4,
            text: "Looks nice. Orange doesn't match the rest of the blaster.",
            date: new Date(2022, 12, 30).valueOf(),
        },
    ],
    price: 19.95,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['orange', 'pink', 'purple', 'green'],
};
