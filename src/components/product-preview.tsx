import { RatingAverage } from './reviews';
import type { Product } from '../types';
import { Preview } from './preview';

export const ProductPreview = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-6">
            {products.map(function (product: Product) {
                const { id, preview, name, price, description, reviews } =
                    product;
                return (
                    <div className="grid-item p-5" key={id}>
                        <Preview image={preview} />
                        <h2>{name}</h2>
                        <h2>{price}</h2>
                        <p>{description}</p>
                        <RatingAverage reviews={reviews} />
                    </div>
                );
            })}
        </div>
    );
};
