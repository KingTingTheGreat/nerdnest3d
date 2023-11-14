import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="text-center text-sm p-5">
            Made with ♥ in&nbsp;
            <Link href="https://nextjs.org" target="_blank">
                React + NextJs
            </Link>
            &nbsp;with&nbsp;
            <Link href="https://radix-ui.com" target="_blank">
                RadixUI
            </Link>
            &nbsp;and&nbsp;
            <Link href="https://tailwindcss.com" target="_blank">
                TailwindCSS
            </Link>
        </footer>
    );
};
