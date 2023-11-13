import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import img1 from './saber-stand-1.webp';
import img2 from './saber-stand-2.webp';
import img3 from './saber-stand-3.webp';
import img4 from './saber-stand-4.webp';
import img5 from './saber-stand-5.webp';

const images: React.ReactElement[] = [
    <Image
        src={img1}
        alt="Saber Stand 1"
        className="w-full h-full object-cover"
    />,
    <Image
        src={img2}
        alt="Saber Stand 2"
        className="w-full h-full object-cover"
    />,
    <Image
        src={img3}
        alt="Saber Stand 3"
        className="w-full h-full object-cover"
    />,
    <Image
        src={img4}
        alt="Saber Stand 4"
        className="w-full h-full object-cover"
    />,
    <Image
        src={img5}
        alt="Saber Stand 5"
        className="w-full h-full object-cover"
    />,
];

export const SABER_STAND: Product = {
    id: '0104',
    name: 'Saber Stand',
    summary: 'A novel way to display your light swords!',
    description:
        'A novel way to display your most valued light swords. You can customize the look to match your style!',
    features: [
        'Displays your light swords',
        'Easily attaches and detaches from the wall',
        'Light swords can effortlessly be hung up and brought down',
    ],
    preview: images[0],
    images: images,
    reviews: [
        {
            rating: 5,
            text: 'Great product! Looks very cool on my wall.',
            date: new Date(2023, 6, 13).valueOf(),
        },
        { rating: 5, date: new Date(2023, 4, 10).valueOf() },
        {
            rating: 4,
            text: 'Pretty good. Some print defects.',
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 1,
            text: 'Useless. Broke after a few days.',
            date: new Date(2022, 12, 15).valueOf(),
        },
        { rating: 4, date: new Date(2022, 11, 11).valueOf() },
        {
            rating: 3,
            text: 'I wish it was a bit more study.',
            date: new Date(2022, 10, 30).valueOf(),
        },
        {
            rating: 5,
            text: 'Great product! I love it!',
            date: new Date(2023, 10, 30).valueOf(),
        },
    ],
    price: 29.95,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'white', 'orange', 'pink'],
};
