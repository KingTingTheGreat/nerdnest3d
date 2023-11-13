import { NerdBird } from '@/types';
import Image from 'next/image';
import img from './rnaeem.webp';

export const RNaeem: NerdBird = {
    name: 'Rida Naeem',
    bio: 'I am a student at Boston University',
    picture: (
        <Image
            src={img}
            alt="Rida Naeem"
            className="w-full h-full object-cover"
        />
    ),
    socials: ['https://github.com/ridanaeeem'],
};
