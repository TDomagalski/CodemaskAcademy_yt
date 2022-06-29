export type Dictionary = {
	companyName: string,
	components: {
		header: {
			title: string,
			github: string,
			linkedin: string,
		},
		footer: {
			flatIcon: string,
			libreTranslate: string,
		},
		message: {
			tryAgain: string,
		}
	},
	screen: {
		translator: {
			loading: string
		}
	},
};
