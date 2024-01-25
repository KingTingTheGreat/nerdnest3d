import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Root } from '@/components/root';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: 'NerdNest3D',
    description: 'our super duper cool website',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Root>
            {children}
            <Analytics />
        </Root>
    );
}
