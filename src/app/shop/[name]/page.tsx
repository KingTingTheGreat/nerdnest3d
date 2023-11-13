'use client';
import React, { FC } from 'react';
import { ProductsByName } from '@/data';
import { ProductPage } from '@/components/product-page';
import { useCart } from '@/hooks';
import { Header } from '@/components/header';
import { user } from '@/data';
import { Footer } from '@/components/footer';

interface pageProps {
    params: { name: string };
}

const ShopProduct: FC<pageProps> = ({ params }) => {
    const [cart, addToCart] = useCart();
    const product = ProductsByName[params.name];
    return (
        <>
            <Header cart={cart} user={user} />
            <ProductPage product={product} addToCart={addToCart} />
            <Footer />
        </>
    );
};

export default ShopProduct;
