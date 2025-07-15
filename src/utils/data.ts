import { getLangFromUrl, useTranslations } from "@/i18n/utils"
import { TAGS } from "@/utils/tags"

// images
import dolceComprasImg from "../../public/images/dolce-compras.webp"
import ignitionImg from "../../public/images/ignition.webp"
import flamerlyImg from "../../public/images/flamerly.webp"
import duagtImg from "../../public/images/duagt.webp"
import structuraImg from "../../public/images/structura.webp"
import tictactoeImg from "../../public/images/tic-tac-toe.webp"

export async function getWorks(url: URL) {
	const lang = getLangFromUrl(url)
	const t = useTranslations(lang)

	return [
		{
			id: 1,
			imageUrl: dolceComprasImg,
			url: "dolcecompras",
			title: {
				text: "DolceCompras",
				slug: "dolcecompras",
				color: "bg-gradient-to-r from-[#4fa2c8] via-[#9e93ab] to-[#d4816f] bg-clip-text",
			},
			tags: [TAGS.NEXTJS, TAGS.FIREBASE, TAGS.TYPESCRIPT],
			description: t("dolce.desc"),
			type: {
				type: "private",
				colorType: "bg-teal-600 text-white",
			},
			date: t("dolce.date"),
			functionalities: [
				{
					id: 1,
					title: t("dolce.func.title1"),
					description: t("dolce.func.desc1"),
				},
				{
					id: 2,
					title: t("dolce.func.title2"),
					description: t("dolce.func.desc2"),
				},
				{
					id: 3,
					title: t("dolce.func.title2"),
					description: t("dolce.func.desc3"),
				},
				{
					id: 4,
					title: t("dolce.func.title4"),
					description: t("dolce.func.desc4"),
				},
			],
		},
		{
			id: 2,
			imageUrl: ignitionImg,
			url: "ignition",
			title: {
				text: "Ignition",
				slug: "ignition",
				color: "bg-gradient-to-r from-[#fe4d3c] to-[#d80d91] bg-clip-text",
			},
			tags: [TAGS.REACTJS, TAGS.REDUX, TAGS.TAILWIND],
			description: t("ignition.desc"),
			type: {
				type: "private",
				colorType: "bg-orange-600 text-white",
			},
			date: t("ignition.date"),
			responsabilities: [
				{
					title: t("ignition.resp.title1"),
					description: t("ignition.resp.desc1"),
					type: "Frontend",
				},
				{
					title: t("ignition.resp.title2"),
					description: t("ignition.resp.desc2"),
					type: "Cloud",
				},
				{
					title: t("ignition.resp.title3"),
					description: t("ignition.resp.desc3"),
					type: "Database",
				},
			],
			functionalities: [
				{
					id: 1,
					title: t("ignition.func.title1"),
					description: t("ignition.func.desc1"),
				},
				{
					id: 2,
					title: t("ignition.func.title2"),
					description: t("ignition.func.desc2"),
				},
				{
					id: 3,
					title: t("ignition.func.title3"),
					description: t("ignition.func.desc3"),
				},
			],
		},
		{
			id: 3,
			imageUrl: flamerlyImg,
			url: "flamerly",
			title: {
				text: "Flamerly",
				slug: "flamerly",
				color: "bg-gradient-to-r from-[#5a769b] to-[#697385] bg-clip-text",
			},
			tags: [TAGS.REACTJS, TAGS.DJANGO, TAGS.TAILWIND],
			description: t("flamerly.desc"),
			type: {
				type: "private",
				colorType: "bg-orange-600 text-white",
			},
			date: t("flamerly.date"),
			responsabilities: [
				{
					title: t("flamerly.resp.title1"),
					description: t("flamerly.resp.desc1"),
					type: "Backend",
				},
				{
					title: t("flamerly.resp.title2"),
					description: t("flamerly.resp.desc2"),
					type: "Frontend",
				},
				{
					title: t("flamerly.resp.title3"),
					description: t("flamerly.resp.desc3"),
					type: "IA",
				},
				{
					title: t("flamerly.resp.title4"),
					description: t("flamerly.resp.desc4"),
					type: "Cloud",
				},
				{
					title: t("flamerly.resp.title5"),
					description: t("flamerly.resp.desc5"),
					type: "Database",
				},
			],
			functionalities: [
				{
					id: 1,
					title: t("flamerly.func.title1"),
					description: t("flamerly.func.desc1"),
				},
				{
					id: 2,
					title: t("flamerly.func.title2"),
					description: t("flamerly.func.desc2"),
				},
			],
		},
		{
			id: 4,
			imageUrl: duagtImg,
			url: "escuela-duagt",
			title: {
				text: "Escuela virtual DUAGT",
				slug: "escuela-duagt",
				color: "bg-gradient-to-r from-[#6cd69f] via-[#bdb19d] to-[#dc7998] bg-clip-text",
			},
			tags: [TAGS.MOODLE, TAGS.MYSQL],
			description: t("duagt.desc"),
			type: {
				type: "private",
				colorType: "bg-teal-600 white",
			},
			date: t("duagt.date"),
			functionalities: [
				{
					id: 1,
					title: t("duagt.func.title1"),
					description: t("duagt.func.desc1"),
				},
				{
					id: 2,
					title: t("duagt.func.title2"),
					description: t("duagt.func.desc2"),
				},
				{
					id: 3,
					title: t("duagt.func.title3"),
					description: t("duagt.func.desc3"),
				},
			],
		},
	]
}

export async function getProjects(url: URL) {
	const lang = getLangFromUrl(url)
	const t = useTranslations(lang)

	return [
		{
			id: 1,
			imageUrl: structuraImg,
			url: "structura",
			title: {
				text: "Structura",
				slug: "structura",
				color: "bg-gradient-to-r from-[#72746a] to-[#636363] bg-clip-text",
			},
			tags: [TAGS.NEXTJS, TAGS.AISDK, TAGS.TYPESCRIPT],
			description: t("structura.desc"),
			type: {
				type: "open",
				repo: "https://github.com/vasquezluis/structura",
				url: "https://structura-hackathon.vercel.app/",
				colorType: "bg-orange-600 text-white",
			},
			date: t("structura.date"),
			functionalities: [
				{
					id: 1,
					title: t("structura.func.title1"),
					description: t("structura.func.desc1"),
				},
				{
					id: 2,
					title: t("structura.func.title2"),
					description: t("structura.func.desc2"),
				},
				{
					id: 3,
					title: t("structura.func.title3"),
					description: t("structura.func.desc3"),
				},
				{
					id: 4,
					title: t("structura.func.title4"),
					description: t("structura.func.desc4"),
				},
				{
					id: 5,
					title: t("structura.func.title5"),
					description: t("structura.func.desc5"),
				},
			],
		},
		{
			id: 2,
			imageUrl: tictactoeImg,
			url: "tic-tac-toe",
			title: {
				text: "Tic-Tac-Toe",
				slug: "tic-tac-toe",
				color: "bg-gradient-to-r from-[#257441] to-[#195d75] bg-clip-text",
			},
			tags: [TAGS.REACTJS, TAGS.SOCKETIO, TAGS.NODEJS],
			description: t("tictactoe.desc"),
			type: {
				type: "open",
				repo: "https://github.com/vasquezluis/tic-tac-toe-client",
				// url: "https://structura-hackathon.vercel.app/",
				colorType: "bg-orange-600 text-white",
			},
			date: t("tictactoe.date"),
			functionalities: [
				{
					id: 1,
					title: t("tictactoe.func.title1"),
					description: t("tictactoe.func.desc1"),
				},
				{
					id: 2,
					title: t("tictactoe.func.title2"),
					description: t("tictactoe.func.desc2"),
				},
				{
					id: 3,
					title: t("tictactoe.func.title3"),
					description: t("tictactoe.func.desc3"),
				},
			],
		},
	]
}
