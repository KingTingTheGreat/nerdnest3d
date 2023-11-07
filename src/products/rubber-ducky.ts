import { images } from './product-images/rubber-ducky/rubber-ducky-images';

export const RUBBER_DUCKY = {
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
