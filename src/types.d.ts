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

export interface Responsabilities {
	id: number
	title: string
	description: string
	type: string
}

export interface Functionality {
	id: number
	title: string
	description: string
}

export interface Challenge {
	id: number
	title: string
	description: string
}

export interface Issue {
	id: number
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
	responsabilities?: Responsabilities[] | undefined
	functionalities?: ProjectFunctionality[] | undefined
	challenges?: ChallengeFunctionality[] | undefined
	issues?: IssueFunctionality[] | undefined
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
