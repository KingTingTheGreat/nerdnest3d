import { RatingAverage } from './reviews';
import type { Product } from '../types';
import { Preview } from './preview';
import { Link } from 'react-router-dom';

export const ProductPreview = ({ products }: { products: Product[] }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-wrap justify-center w-90% bg-gray-white">
                {products.map(function (product: Product) {
                    const { preview, name, price, summary, reviews } = product;
                    return (
                        <Link
                            to={`/products/${product.name}`}
                            className="bg-white rounded-lg flex flex-col p-4 m-2 w-15% min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104"
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
