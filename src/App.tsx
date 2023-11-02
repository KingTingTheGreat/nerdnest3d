import { Header } from './components/header';
import { Images } from './components/images';
import { ProductGrid } from './components/product-grid';
import { useCart } from './hooks';
import type { Product, User } from './types';

function App({ products, user }: { products: Product[]; user: User }) {
    const [cart, addToCart] = useCart();

    return (
        <div className="bg-gray-light">
            <Header cart={cart} user={user} />

            <main>
                <ProductGrid products={products} addToCart={addToCart} />
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
