import Link from "next/link";

export function Logo() {
	return (
		<Link href="/">
			<h1 className="text-purple-500 text-4xl font-bold leading-[28px]">
				<span className="text-green-500">NerdNest</span>3D
			</h1>
		</Link>
	);
}
