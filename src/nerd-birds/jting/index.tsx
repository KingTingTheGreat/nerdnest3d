import { NerdBird } from '@/types';
import Image from 'next/image';
import img from './jting.webp';

export const JTing: NerdBird = {
    name: 'Jeffrey Ting',
    bio: 'I am a student at Boston University',
    picture: (
        <Image
            src={img}
            alt="picture of Jeffrey"
            className="w-full h-full object-cover"
        />
    ),
    socials: [
        'https://www.linkedin.com/in/jeffrey-ting-08b606253/',
        'https://github.com/KingTingTheGreat',
    ],
};
