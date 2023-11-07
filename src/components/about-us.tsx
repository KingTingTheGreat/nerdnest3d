import React from 'react';
import { NerdBirds } from '../data';
import { Preview } from './preview';

export const AboutUs = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl">Meet the NerdBirds</h1>
            <p>
                We are a team of undergraduate developers passionate about our
                so-called "nerdy" hobbies
            </p>
            <div className="flex flex-row justify-center w-80%">
                {NerdBirds.map(function (NerdBird) {
                    const { name, picture, bio, socials } = NerdBird;
                    return (
                        <div className="flex flex-col items-center w-25%">
                            <h2 className="text-xl">{name}</h2>
                            <Preview image={picture} />
                            <p>{bio}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
