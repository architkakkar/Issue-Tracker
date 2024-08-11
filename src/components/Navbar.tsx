import Link from "next/link";

import { AiFillBug } from "react-icons/ai";

export default function Navbar() {
	const navLinks = [
		{ label: "Dashboard", href: "/" },
		{ label: "Issues", href: "/issues" },
	];

	return (
		<nav className="flex space-x-10 border-b mb-5 px-5 py-5 items-center">
			<Link href="/">
				<AiFillBug className="text-2xl" />
			</Link>
			<ul className="flex space-x-6">
				{navLinks.map((link) => (
					<li key={link.label}>
						<Link
							href={link.href}
							className="text-zinc-500 hover:text-zinc-900 transition-colors"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
