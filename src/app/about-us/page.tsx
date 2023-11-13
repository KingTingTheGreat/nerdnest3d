'use client';
import { useCart } from '@/hooks';
import { Header } from '@/components/header';
import { user } from '@/data';
import { AboutUs } from '@/components/about-us';
import { Footer } from '@/components/footer';

export default function AboutUsPage() {
    const [cart, addToCart] = useCart();

    return (
        <>
            <Header cart={cart} user={user} />
            <main className="content-center">
                <AboutUs />
            </main>
            <Footer />
        </>
    );
}
