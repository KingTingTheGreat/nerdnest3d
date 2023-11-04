import { RatingAverage } from './reviews';
import type { Product } from '../types';
import { Preview } from './preview';
import { Link } from 'react-router-dom';

export const ProductPreview = ({ products }: { products: Product[] }) => {
    return (
        // <div className="flex justify-center items-center w-full">
        <div className="flex flex-wrap w-90% bg-white">
            {products.map(function (product: Product) {
                const { id, preview, name, price, description, reviews } =
                    product;
                return (
                    <div
                        className="flex flex-col p-4 m-2 w-15% min-w-10vw"
                        key={id}
                    >
                        <Link to={`/products/${product.id}`}>
                            <Preview image={preview} />
                            <h2>{name}</h2>
                            <RatingAverage reviews={reviews} />
                            <h2>{price}</h2>
                            <p>{description}</p>
                        </Link>
                    </div>
                    // </Link>
                );
            })}
        </div>
        // </div>
    );
};
