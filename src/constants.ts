const anim = {
	old: {
		name: "fadeIn",
		duration: "0.2s",
		easing: "linear",
		fillMode: "forwards",
	},
	new: {
		name: "fadeOut",
		duration: "0.3s",
		easing: "linear",
		fillMode: "backwards",
	},
}

export const myFade = {
	forwards: anim,
	backwards: anim,
}
