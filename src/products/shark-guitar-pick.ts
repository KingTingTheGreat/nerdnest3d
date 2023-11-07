import { images } from './product-images/shark-guitar-pick/shark-guitar-pick-images';

export const SHARK_GUITAR_PICK = {
    id: '2121',
    name: 'Shark Guitar Pick',
    summary: 'A guitar pick that has a shark imprint!',
    description:
        'Rock out with this shark guitar pick. Shred on guitar like a shark shreds waves!',
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
            rating: 4.5,
            text: 'Pretty good pick. I just wish it came with more than one.',
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 5,
            text: 'Great! I love him!',
            date: new Date(2022, 12, 15).valueOf(),
        },
        { rating: 4, date: new Date(2022, 11, 11).valueOf() },
        {
            rating: 4,
            text: "He's so cute",
            date: new Date(2022, 10, 30).valueOf(),
        },
    ],
    price: 4.95,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['blue', 'pink', 'white', 'black'],
};
