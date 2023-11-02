import { Header } from './components/header';
import { Images } from './components/images';
import { ProductGrid } from './components/product-grid';
import { useCart } from './hooks';
import type { Product, User } from './types';
import { ProductPreview } from './components/product-preview';

function App({ products, user }: { products: Product[]; user: User }) {
    const [cart, addToCart] = useCart();

    return (
        <div className="bg-gray-light">
            <Header cart={cart} user={user} />

            <main className="flex justify-center">
                {/* <ProductGrid products={products} addToCart={addToCart} /> */}
                <ProductPreview products={products} />
            </main>

            <footer className="text-center text-sm p-5">
                Made with ♥ in&nbsp;
                <a href="https://codux.com">Codux</a>
                &nbsp;with&nbsp;
                <a href="https://radix-ui.com">RadixUI</a>
                &nbsp;and&nbsp;
                <a href="https://tailwindcss.com">TailwindCSS</a>
            </footer>
        </div>
    );
}

export default App;
