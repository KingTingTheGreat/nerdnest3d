import img1 from './heart-carabiner-1.webp';
import img2 from './heart-carabiner-2.webp';
import React from 'react';
import { Product } from '@/types';
import Image from 'next/image';

const images: React.ReactElement[] = [
    <Image
        src={img1}
        alt="Heart Carabiner 1"
        className="w-full h-full object-cover"
        key="1"
    />,
    <Image
        src={img2}
        alt="Heart Carabiner 2"
        className="w-full h-full object-cover"
        key="2"
    />,
];

export const HEART_CARABINER: Product = {
    id: '6969',
    name: 'Heart Carabiner',
    summary: 'Always feel loved with this unique carabiner!',
    description:
        'A cute heart-shaped carabiner with threaded closure. Attach light objects to your bag, clothes, or keys!',
    features: ['Attach light objects', 'A great gift', 'Fashionable', 'Pretty'],
    preview: images[0],
    images: images,
    reviews: [
        {
            rating: 5,
            text: 'So cute!',
            date: new Date(2023, 6, 13).valueOf(),
        },
        {
            rating: 3,
            text: 'Broke. Just like my heart.',
            date: new Date(2023, 4, 10).valueOf(),
        },
        {
            rating: 5,
            text: 'Made a great gift for my girlfriend <3',
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 2,
            text: 'Not a good carabiner. Broke under light load.',
            date: new Date(2022, 12, 15).valueOf(),
        },
    ],
    price: 14.95,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['orange', 'magenta', 'purple', 'red'],
};
