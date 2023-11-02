import { images } from './product-images/shark-guitar-pick/shark-guitar-pick-images';

export const SHARK_GUITAR_PICK = {
    id: '2121',
    name: 'Shark Guitar Pick',
    description: 'A guitar pick that has a shark imprint!',
    features: [
        'Display a shark',
        'Precise guitar picking',
        'Look and sound your best',
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
    price: 4.95,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['blue', 'pink', 'white', 'black'],
};
