import type { Product } from '../types';
import { Products } from '@/data';
import Link from 'next/link';
import { Preview } from './preview';
import { RatingAverage } from './reviews';

export const ProductPreviews = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center w-90 bg-gray-white">
                {Products.map(function (product: Product) {
                    const { id, preview, name, price, summary, reviews } =
                        product;
                    return (
                        <Link
                            key={id}
                            href={`/shop/${name
                                .replace(/\s+/g, '-')
                                .toLowerCase()}`}
                            className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104"
                        >
                            <Preview image={preview} />
                            <h2>{name}</h2>
                            <RatingAverage reviews={reviews} />
                            <h2>{price}</h2>
                            <p>{summary}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
