import { NerdBirds } from '../data';
import { Preview } from './preview';

export const AboutUs = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-4xl p-2 m-1">Meet the NerdBirds!</h1>
            <p className=" text-xl m-1">
                We are a team of undergraduate developers passionate about our
                so-called "nerdy" hobbies.
            </p>
            <a
                href="https://github.com/KingTingTheGreat/nerdnest3d"
                target="_blank"
                className="hover:text-yellow m-1 text-lg"
            >
                Check out our GitHub!
            </a>
            <div className="flex flex-row justify-center w-80%">
                {NerdBirds.map(function (NerdBird) {
                    const { name, picture, bio, socials } = NerdBird;
                    return (
                        <div className="flex flex-col items-center w-25% m-5 rounded-3xl p-5 bg-gray-midlight">
                            <h2 className="text-2xl m-0 p-2">{name}</h2>
                            <div className="w-85%">
                                <Preview image={picture} />
                            </div>
                            <p className="m-0 pt-2 pb-0">{bio}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
