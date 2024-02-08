'use client';
import { ProductPreviews } from '@/components/product-previews';
import { useCart } from '@/hooks';
import { Header } from '@/components/header';
import { user } from '@/data';
import { Footer } from '@/components/footer';

export default function Shop() {
    const [cart, addToCart] = useCart();

    return (
        <>
            <Header cart={cart} user={user} />
            <main className="content-center">
                <ProductPreviews />
            </main>
        </>
    );
}
