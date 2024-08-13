import { useState } from "preact/hooks"
import Hamburger from "./icons/Hamburger"

const Links = [
	{ href: "#info", label: "Información" },
	{ href: "#experience", label: "Experiencia" },
	{ href: "#projects", label: "Proyectos" },
	{ href: "#technologies", label: "Tecnologías" },
	{ href: "#study", label: "Estudios" },
]

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{/* desktop menu */}
			<header
				id="info"
				class="mx-auto hidden z-50 items-center justify-center py-5 md:flex xl:w-[1120px]"
			>
				<nav class="inline-flex items-center justify-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs md:px-4 md:py-2 md:text-base">
					{Links.map((item) => (
						<a href={item.href} class="transition hover:text-[#0891b2]">
							{item.label}
						</a>
					))}
				</nav>
			</header>

			{/* mobile menu */}
			<header id="info" class="relative mx-auto flex w-full items-center justify-end py-2 pr-4 md:hidden">
				<button
					data-dropdown-toggle="dropdownDelay"
					data-dropdown-delay="500"
					data-dropdown-trigger="hover"
					class={`inline-flex items-center rounded-lg bg-white/5 px-3 py-2 text-center text-sm font-medium text-white ${isOpen && "ring-1 ring-white/20"}`}
					type="button"
					onClick={() => setIsOpen(!isOpen)}
				>
					<Hamburger class="size-6" />
				</button>

				<nav
					class={`absolute right-3 top-full mt-1 z-50 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} w-44 divide-y divide-gray-100 rounded-lg bg-neutral-800/90 shadow border border-white/10 transition ease-in-out duration-300 transform`}
				>
					<ul
						class="py-2 text-sm text-gray-200"
						aria-labelledby="dropdownDelayButton"
					>
						{Links.map((item) => (
							<li>
								<a
									href={item.href}
									class="block px-4 py-2"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
