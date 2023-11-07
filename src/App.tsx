import { Header } from './components/header';
import { useCart } from './hooks';
import type { Product, User } from './types';
import { ProductPreview } from './components/product-preview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductPage } from './components/product-page';
import { Products, ProductsById } from './data';
import { user } from './data';

function App() {
    const [cart, addToCart] = useCart();

    return (
        <div className="bg-gray-light">
            <BrowserRouter>
                <Header cart={cart} user={user} />

                <main className="content-center">
                    <Routes>
                        <Route
                            path="/"
                            element={<ProductPreview products={Products} />}
                        />
                        <Route
                            path="/products/:productName"
                            element={<ProductPage addToCart={addToCart} />}
                        />
                    </Routes>
                </main>

                <footer className="text-center text-sm p-5">
                    Made with ♥ in&nbsp;
                    <a href="https://codux.com">Codux</a>
                    &nbsp;with&nbsp;
                    <a href="https://radix-ui.com">RadixUI</a>
                    &nbsp;and&nbsp;
                    <a href="https://tailwindcss.com">TailwindCSS</a>
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
