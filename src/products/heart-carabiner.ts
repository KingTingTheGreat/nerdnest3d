import { images } from './product-images/heart-carabiner/heart-carabiner-images';

export const HEART_CARABINER = {
    id: '6969',
    name: 'Heart Carabiner',
    description: 'Always feel loved with this on your bag!',
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
