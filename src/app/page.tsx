'use client';
import { ProductPreviews } from '@/components/product-previews';
import { useCart } from '@/hooks';
import { Header } from '@/components/header';
import { user } from '@/data';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Products } from '@/data';

export default function Home() {
    const [cart, addToCart] = useCart();

    return (
        <>
            <Header cart={cart} user={user} />
            <main>
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                                Designed and printed by us, for you
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {Products &&
                            Products.map((product) => (
                                <ProductPreviews key={product.name} />
                            ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );

    // return (
    //     <>
    //         <Header cart={cart} user={user} />
    //         <main className="content-center">
    //             <h1>Welcome to our website blah blah blah</h1>
    //             <Link href="/shop">Shop</Link>
    //         </main>
    //         <Footer />
    //     </>
    // );
}
