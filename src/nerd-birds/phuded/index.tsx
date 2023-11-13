import { NerdBird } from '@/types';
import Image from 'next/image';
import img from './phuded.webp';

export const PHuded: NerdBird = {
    name: 'Pooja Huded',
    bio: 'I am a student at Vassar College',
    picture: (
        <Image
            src={img}
            alt="Pooja Huded"
            className="w-full h-full object-cover"
        />
    ),
    socials: ['https://github.com/poojahuded'],
};
