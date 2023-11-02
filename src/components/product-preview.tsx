import { RatingAverage } from './reviews';
import type { Product } from '../types';
import { Preview } from './preview';

export const ProductPreview = ({ products }: { products: Product[] }) => {
    return (
        <div className="display-grid">
            {products.map(function (product: Product) {
                const { id, preview, name, price, description, reviews } =
                    product;
                return (
                    <div className="flex flex-col gap-5 p-5 grid-item" key={id}>
                        <Preview image={preview} />
                        <h2 className="flex justify-between text-3xl font-normal">
                            <span className="w-2/3">{name}</span>
                            <span>{price}</span>
                        </h2>
                        <p>{description}</p>
                        <RatingAverage reviews={reviews} />
                    </div>
                );
            })}
        </div>
    );
};
