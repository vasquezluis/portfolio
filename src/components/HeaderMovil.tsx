import { useState } from "react"

function HeaderMovil() {
	const [toggleMenu, setToggleMenu] = useState(false)

	const Links = [
		{ href: "#informacion", label: "Información" },
		{ href: "#portafolio", label: "Portafolio" },
		{ href: "#experiencia", label: "Experiencia" },
		{ href: "#habilidades", label: "Habilidades" },
		{ href: "#estudios", label: "Estudios" },
	]

	return (
		<>
			<div className="sm:hidden">
				<button
					id="menu-btn"
					className="text-gray-600 focus:outline-none"
					onClick={() => setToggleMenu(!toggleMenu)}
				>
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						></path>
					</svg>
				</button>
			</div>

			<div
				id="menu"
				className={`${
					toggleMenu ? "" : "hidden"
				} absolute right-3 top-20 z-10 mt-0 min-w-[170px] justify-end rounded-md bg-gray-950 shadow-md sm:hidden`}
			>
				<ul className="mt-2 w-full p-2 py-2">
					{Links.map((item, index) => (
						<li key={index} onClick={() => setToggleMenu(false)}>
							<a
								className="block px-4 py-2 text-end hover:bg-gray-700 hover:text-white"
								href={item.href}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default HeaderMovil
