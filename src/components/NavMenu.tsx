import { useState } from "preact/hooks"

import SpainFlag from "/icons/spanish.svg?url"
import EnglishFlag from "/icons/english.svg?url"

import { useTranslatedPath } from "@/i18n/utils"

type Links = {
	href: string
	label: string
}

interface Props {
	Links: Links[]
	lang: "es" | "en"
	languages: { es: string; en: string }
}

const Header = ({ Links, lang, languages }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	const translatePath = useTranslatedPath(lang)

	return (
		<header class="relative mx-auto flex w-full items-center justify-end py-2 pr-4 md:hidden">
			<button
				data-dropdown-toggle="dropdownDelay"
				data-dropdown-delay="500"
				data-dropdown-trigger="hover"
				class={`inline-flex items-center rounded-lg bg-white/5 px-3 py-2 text-center text-sm font-medium text-white ${isOpen && "ring-1 ring-white/20"}`}
				type="button"
				onClick={() => setIsOpen(!isOpen)}
			>
				<img src="/icons/Hamburger.svg" class="size-6" />
			</button>

			<nav
				class={`absolute right-3 top-full z-50 mt-1 ${isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"} w-44 transform divide-y divide-gray-100 rounded-lg border border-white/10 bg-neutral-800/90 shadow transition duration-300 ease-in-out`}
			>
				<ul class="py-2 text-sm text-gray-200" aria-labelledby="dropdownDelayButton">
					{Links.map((item) => (
						<li>
							<a
								href={item.href}
								class="block px-4 py-2"
								onClick={() => {
									setIsOpen(false)
								}}
							>
								{item.label}
							</a>
						</li>
					))}
					<li class="flex items-start justify-center gap-x-2">
						{Object.entries(languages).map(([langPrefix]) => (
							<a href={translatePath("/", langPrefix)}>
								{langPrefix === "es" ? <img src={SpainFlag} /> : <img src={EnglishFlag} />}
							</a>
						))}
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
