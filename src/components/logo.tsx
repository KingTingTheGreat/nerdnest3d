import { Link } from 'react-router-dom';

export function Logo() {
    return (
        <Link to="/">
            <h1 className="text-logo-purple text-4xl font-bold leading-[28px]">
                <span className="text-logo-green">NerdNest</span>3D
            </h1>
        </Link>
    );
}
