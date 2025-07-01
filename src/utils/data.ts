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
			description: t("work1.desc"),
			type: {
				type: "private",
				colorType: "bg-teal-600 text-white",
			},
			date: "Mayo 2024",
			functionalities: [
				{
					id: 1,
					title: "Base de datos en tiempo real",
					description:
						"La plataforma de DolceCompras ofrece visualizar datos en tiempo real utilizando Firebase.",
				},
				{
					id: 2,
					title: "Timer general",
					description:
						"La plataforma cuenta con la funcionalidad de permitir únicamente un usuario a la vez, restringiendo el acceso con máximo de 15 minutos por sesión. Los demás usuarios pueden ver cuánto tiempo deben esperar para poder iniciar sesión.",
				},
				{
					id: 3,
					title: "Email Trigger",
					description:
						"La plataforma genera y envía un email con una copia de los datos solicitados.",
				},
				{
					id: 4,
					title: "Chequeo de sesiones",
					description:
						"La plataforma cuenta con un 'Firebase Function' el cual revisa constantemente la expiración de la sesión del usuario.",
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
			description: t("work2.desc"),
			type: {
				type: "private",
				colorType: "bg-orange-600 text-white",
			},
			date: "Diciembre 2023",
			responsabilities: [
				{
					title: "Creación de frontend con Reactjs",
					description:
						"Creación de la parte gráfica de la aplicación utilizando Reactjs, manejo de estados utilizando Redux y RTQ. Los estilos de la aplicación se crearon utilizando Tailwincss",
					type: "Frontend",
				},
				{
					title: "Creación de lambdas de AWS",
					description:
						"Creación de lambdas en AWS para el manejo de las operaciones en base de datos y control de usuarios con AWS Cognito.",
					type: "Cloud",
				},
				{
					title: "Creación y mantenimiento de base de datos para mensajes y usuarios",
					description:
						"Creación y mantenimiento de base de datos donde se guardan las imágenes generados por los usuarios.",
					type: "Database",
				},
			],
			functionalities: [
				{
					id: 1,
					title: "Generación de imágenes",
					description: "Ignition genera imágenes utilizando Midjourney como base.",
				},
				{
					id: 2,
					title: "Generación de imágenes tropicalizadas",
					description:
						"Utilizando parámetros visuales, Ignition genera imágenes basados en la localización del usuario, sin crear imágenes de stock.",
				},
				{
					id: 3,
					title: "Generación de imágenes adaptadas",
					description:
						"Ignition genera imágenes adaptadas a marcas, por ejemplo generar cerveza de una marca en especifico.",
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
			description: t("work3.desc"),
			type: {
				type: "private",
				colorType: "bg-orange-600 text-white",
			},
			date: "Mayo 2023",
			responsabilities: [
				{
					title: "Creación de APIs con DJango",
					description:
						"Creación de endpoints para la generación de respuestas de los modelos de OpenAI al estilo de ChatGPT.",
					type: "Backend",
				},
				{
					title: "Creación de frontend con Reactjs",
					description:
						"Creación de la parte gráfica de la aplicación utilizando Reactjs, manejo de estados utilizando Redux y RTQ. Los estilos de la aplicación se crearon utilizando Tailwincss",
					type: "Frontend",
				},
				{
					title: "Creación de chatbot utilizando OpenAI",
					description:
						"Creación de un chatbot utilizando los modelos de OpenAI (chat completions) y crear respuestas basadas en archivos privados de la empresa.",
					type: "IA",
				},
				{
					title: "Creación de lambdas de AWS",
					description:
						"Creación de lambdas en AWS para el manejo de las operaciones en base de datos y control de usuarios con AWS Cognito.",
					type: "Cloud",
				},
				{
					title: "Creación y mantenimiento de base de datos para mensajes y usuarios",
					description:
						"Creación y mantenimiento de base de datos donde se guardan los mensajes generados por los usuarios.",
					type: "Database",
				},
			],
			functionalities: [
				{
					id: 1,
					title: "Chatbot",
					description: "Flamerly puede responder preguntas generales.",
				},
				{
					id: 2,
					title: "Chatbot empresarial",
					description:
						"Flamerly está entrenado para responder preguntas específicas con información privada.",
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
			description: t("work4.desc"),
			type: {
				type: "private",
				colorType: "bg-teal-600 white",
			},
			date: "Enero 2024",
			functionalities: [
				{
					id: 1,
					title: "Control de estudiantes",
					description:
						"El proyecto permite un control de estudiantes y inscripción a diferentes cursos.",
				},
				{
					id: 2,
					title: "Control de maestros",
					description:
						"El proyecto permite el control de maestros y su generación de contenido para diferentes cursos.",
				},
				{
					id: 3,
					title: "Generación de reportes",
					description:
						"El proyecto permite generar reportes de estudiantes, maestros, notas, rendimiento de estudiantes y rendimiento de la aplicación.",
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
			description: t("proj1.desc"),
			type: {
				type: "open",
				repo: "https://github.com/vasquezluis/structura",
				url: "https://structura-hackathon.vercel.app/",
				colorType: "bg-orange-600 text-white",
			},
			date: "Julio 2024",
			functionalities: [
				{
					id: 1,
					title: "Lenguaje natural",
					description:
						"Structura puede comprender el lenguaje natural para la generación de contenido utilizando el modelo gpt3.5 de OpenAI.",
				},
				{
					id: 2,
					title: "Generación de estructuras SQL",
					description:
						"Structura genera contenido SQL basado en la descripción del proyecto del usuario. Structura solo necesita el contexto del proyecto para generar una estructura inicial.",
				},
				{
					id: 3,
					title: "Generación código SQL",
					description:
						"Structura genera código SQL basado en la descripción del proyecto del usuario.",
				},
				{
					id: 4,
					title: "Generación descripción",
					description:
						"Structura una descripción del código SQL generado, ayudando al usuario a entender el contenido.",
				},
				{
					id: 5,
					title: "Generación mapa mental",
					description:
						"Structura genera un mapa mental sobre el código generado para ayudar al usuario a entender el código generado.",
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
			description: t("proj2.desc"),
			type: {
				type: "open",
				repo: "https://github.com/vasquezluis/tic-tac-toe-client",
				// url: "https://structura-hackathon.vercel.app/",
				colorType: "bg-orange-600 text-white",
			},
			date: "Septiembre 2024",
			functionalities: [
				{
					id: 1,
					title: "Multijugador",
					description:
						"Este juego tiene la capacidad de manejar dos jugadores para jugar tic-tac-toe",
				},
				{
					id: 2,
					title: "Tiempo real",
					description:
						"Este proyecto tiene la capacidad de manejar los datos en tiempo real de los jugadores en la partida. Sin tener que recargar la página para obtener cambios.",
				},
				{
					id: 3,
					title: "Salas",
					description:
						"El proyecto tiene la capacidad de manejar diferentes salas, con un máximo de 2 jugadores. Los jugadores pueden crear salas o unirse a salas con un código.",
				},
			],
		},
	]
}
