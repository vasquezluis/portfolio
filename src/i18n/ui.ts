import { languagesES } from "@/utils/translations/es"
import { languagesEN } from "@/utils/translations/en"

export const languages = {
	es: "Español",
	en: "English",
}

export const defaultLang = "es"
export const showDefaultLang = false

export const ui = {
	es: languagesES,
	en: languagesEN,
} as const
