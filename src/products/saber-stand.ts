import { images } from './product-images/saber-stand/saber-stand-images';

export const SABER_STAND = {
    id: '0104',
    name: 'Saber Stand',
    description: 'A novel way to display your most valued light swords!',
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
