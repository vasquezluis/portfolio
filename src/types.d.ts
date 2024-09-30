export interface TagsProps {
	label: string
	class: string
	icon: any
}

export interface ProjectType {
	type: string
	repo?: string
	url?: string
	colorType: string
}

export interface ResponsabilitiesType {
	title: string
	description: string
	type: string
}

export interface ProjectFunctionality {
	title: string
	description: string
}

export interface Project {
	id: number

	imageUrl: any
	url: string
	title: {
		text: string
		slug: string
		color: string
	}
	tags: Array<TagsProps>
	description: string
	type: ProjectType
	date: string
	responsabilities?: ResponsabilitiesType[] | undefined
	functionalities?: ProjectFunctionality[] | undefined
}

export interface TagsProps {
	label: string
	class: string
	icon: any
}

export interface ProjectType {
	type: string
	colorType: string
}
