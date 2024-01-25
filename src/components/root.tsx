'use client';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const Root = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <html lang="en">
                <body className="flex flex-col">
                    {children}
                    <Footer />
                </body>
            </html>
        </SessionProvider>
    );
};
