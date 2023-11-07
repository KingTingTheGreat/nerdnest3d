import { useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { RatingAverage } from './reviews';
import type { CartItem, Product } from '../types';
import { useParams } from 'react-router-dom';
import { ProductsById, ProductsByName } from '../data';
import { Images } from './images';

export const ProductPage = ({
    addToCart,
}: {
    addToCart: (item: CartItem) => void;
}) => {
    const { productName } = useParams();

    if (!productName) return null;

    const product = ProductsByName[productName];
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const item = { product, size: size, color, quantity };

    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-2">
        <div className="flex justify-around">
            <Images images={product.images} />
            <div className="flex flex-col gap-5 p-5">
                <h2 className="flex flex-col justify-between text-3xl font-normal">
                    <span className="w-2/3">{product.name}</span>
                    <span>${product.price}</span>
                    <RatingAverage reviews={product.reviews} />
                </h2>
                <div className="flex flex-col justify-between items-end">
                    <SizeToggle
                        sizes={product.sizes}
                        onChange={(s) => setSize(s)}
                    />
                    <ColorToggle
                        sizes={product.colors}
                        onChange={(s) => setColor(s)}
                    />
                    <button
                        className="bg-black disabled:bg-gray-dark text-white px-5 py-2 rounded font-medium"
                        disabled={!size}
                        onClick={() => addToCart(item)}
                    >
                        Add to Cart
                    </button>
                </div>

                <p>{product.description}</p>
            </div>
        </div>
    );
};

const SizeToggle = ({
    sizes,
    onChange,
}: {
    sizes: Product['sizes'];
    onChange: (s: string) => void;
}) => {
    return (
        <div className="flex flex-col items-start gap-1 w-40  font-medium">
            <label className="leading-tight">Size</label>
            <ToggleGroup.Root
                type="single"
                aria-label="Product size"
                onValueChange={onChange}
                className="w-full grid grid-flow-col bg-gray-light rounded"
            >
                {sizes.map((size, i) => (
                    <ToggleGroup.Item
                        className="bg-gray-light data-[state=on]:bg-yellow px-5 py-2 rounded cursor-pointer"
                        key={i}
                        value={size}
                        title={`Size ${size}`}
                        aria-label={`Size ${size}`}
                    >
                        {size}
                    </ToggleGroup.Item>
                ))}
            </ToggleGroup.Root>
        </div>
    );
};

const ColorToggle = ({
    sizes,
    onChange,
}: {
    sizes: Product['colors'];
    onChange: (s: string) => void;
}) => {
    return (
        <div className="flex flex-col items-start gap-1 w-40  font-medium">
            <label className="leading-tight">Color</label>
            <ToggleGroup.Root
                type="single"
                aria-label="Product size"
                onValueChange={onChange}
                className="w-full grid grid-flow-col bg-gray-light rounded"
            >
                {sizes.map((size, i) => (
                    <ToggleGroup.Item
                        className="bg-gray-light data-[state=on]:bg-yellow px-5 py-2 rounded cursor-pointer"
                        key={i}
                        value={size}
                        title={`Color ${size}`}
                        aria-label={`Color ${size}`}
                    >
                        {size}
                    </ToggleGroup.Item>
                ))}
            </ToggleGroup.Root>
        </div>
    );
};
