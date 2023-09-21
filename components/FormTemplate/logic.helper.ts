export interface mockedFormDataType {
	step: number;
	title: string;
	description: string;
	question: string;
	answer: string[];
	selectedAnswer: string[];
	url: string;
}

export type CategoryMockedDataForm = mockedFormDataType[];

interface CategoriesMockedData {
	individual: CategoryMockedDataForm;
	company: CategoryMockedDataForm;
	government: CategoryMockedDataForm;
}

export const governmentMockedFormData = [
	{
		step: 0,
		title: "Développement intégré",
		description: "Développement intégré",
		question:
			"Comment ce projet s'intègre-t-il dans une vision holistique du développement durable, couvrant à la fois les aspects économiques, sociaux et environnementaux ?",
		answer: [
			"Le projet est conçu avec des objectifs multidimensionnels spécifiques (précisez ci-dessous).",
			"Le projet a une portée limitée mais pourrait bénéficier d'une approche plus intégrée (précisez ci-dessous).",
			"Nous cherchons des orientations pour renforcer son intégration multidimensionnelle.",
			"Le projet est axé sur un domaine spécifique et n'a pas vocation à être multidimensionnel.",
		],
		selectedAnswer: [""],
		url: "/pitch/government/step-1",
	},
	{
		step: 1,
		title: "Collaboration intersectorielle",
		description: "Collaboration intersectorielle",
		question:
			"Comment ce projet encourage-t-il la coopération entre différents secteurs et acteurs, y compris les partenariats internationaux, pour atteindre les objectifs de développement durable ?",
		answer: [
			"Nous avons des partenariats et collaborations établis pour le projet (précisez ci-dessous).",
			"Nous sommes en phase de recherche de partenaires ou de renforcement de la collaboration (précisez ci-dessous).",
			"Nous souhaitons des recommandations pour améliorer la coopération intersectorielle..",
			"Le projet est conçu pour fonctionner de manière indépendante.",
		],
		selectedAnswer: [""],
		url: "/pitch/government/step-2",
	},
];

export const companyMockedFormData = [
	{
		step: 0,
		title: "Environnement & Ressources",
		description: "Environnement et Ressources",
		question:
			"Comment votre entreprise contribue-t-elle à la préservation de l'environnement, à la gestion durable des ressources naturelles et à la réduction de l'impact climatique ?    ",
		answer: [
			"Nous avons mis en place des initiatives spécifiques pour ces domaines (précisez ci-dessous)",
			"Nous intégrons des pratiques durables dans notre modèle d'affaires, mais sans initiatives spécifiques (précisez ci-dessous)",
			"Nous n'avons pas encore intégré des pratiques durables, mais nous sommes intéressés par des recommandations",
			"Cela ne s'applique pas à notre entreprise/projet",
		],
		selectedAnswer: [""],
		url: "/pitch/company/step-1",
	},
	{
		step: 1,
		title: "Social",
		description: "Bien-être social",
		question:
			"De quelle manière votre entreprise favorise-t-elle le bien-être, la santé, l'éducation et l'égalité sur le lieu de travail et dans la communauté ?",
		answer: [
			"Nous mettons en œuvre des programmes et initiatives spécifiques (précisez ci-dessous).",
			"Ces aspects sont présents dans notre culture d'entreprise, mais sans programmes dédiés (précisez ci-dessous)",
			"Cela ne s'applique pas actuellement à notre entreprise/projet",
			"Cela ne s'applique pas à notre entreprise/projet",
		],
		selectedAnswer: [""],
		url: "/pitch/company/step-2",
	},
	{
		step: 2,
		title: "Gouvernance et partenariat",
		description: "Gouvernance et partenariat",
		question:
			"Comment votre entreprise collabore-t-elle avec d'autres acteurs, gouvernements ou organisations, et assure-t-elle une conduite responsable et éthique ?",
		answer: [
			"Nous avons mis en place des initiatives spécifiques pour ces domaines (précisez ci-dessous)",
			"Nous intégrons des pratiques durables dans notre modèle d'affaires, mais sans initiatives spécifiques (précisez ci-dessous)",
			"Nous n'avons pas encore intégré des pratiques durables, mais nous sommes intéressés par des recommandations",
			"Cela ne s'applique pas à notre entreprise/projet",
		],
		selectedAnswer: [""],
		url: "/pitch/company/step-3",
	},
];

export const individualMockedFormData = [
	{
		step: 0,
		title: "Amélioration communautaire",
		description: "Amélioration communautaire   ",
		question:
			"Comment votre projet contribue-t-il à améliorer la vie dans votre communauté, en termes de santé, d'éducation ou d'environnement ?",
		answer: [
			"Mon projet a des actions concrètes dans ces domaines (précisez ci-dessous).",
			"Mon projet touche indirectement à ces domaines sans objectifs spécifiques (précisez ci-dessous).",
			"Je souhaite des conseils pour mieux aligner mon projet avec ces domaines.",
			"Ces domaines ne sont pas pertinents pour mon projet.",
		],
		selectedAnswer: [""],
		url: "/pitch/step-1",
	},
	{
		step: 1,
		title: "Inclusion et Égalité",
		description: "Inclusion et Égalité",
		question:
			"Votre initiative promeut-elle l'égalité, la justice ou l'inclusion de tous les membres de votre communauté ?",
		answer: [
			"Oui, c'est un objectif principal de mon projet (précisez ci-dessous).",
			"Mon projet touche à ces thèmes sans que ce soit l'objectif principal (précisez ci-dessous).",
			"Je cherche des orientations pour renforcer ces aspects.",
			"Cela ne s'applique pas à mon projet.",
		],
		selectedAnswer: [""],
		url: "/pitch/step-2",
	},
];

const categoriesForm = {
	individual: individualMockedFormData,
	company: companyMockedFormData,
	government: governmentMockedFormData,
} as CategoriesMockedData;

export const getCategoryForm = (category: string) => {
	return categoriesForm[category as keyof CategoriesMockedData];
};

export type categoryDataForm = {
	category: string;
	step: number;
	categoryForm: CategoryMockedDataForm;
};

export const saveDataCategoryForm = (category: string, step: number, categoryForm: CategoryMockedDataForm) => {
	if (window !== undefined) {
		const localStorageCategoryDataForm = window.localStorage.getItem("categoryDataForm");

		if (typeof localStorageCategoryDataForm === "string") {
			const newCategoryDataForm: categoryDataForm = {
				category,
				step,
				categoryForm: categoryForm,
			};
			const stringifiedCategoryDataForm = JSON.stringify(newCategoryDataForm);

			if (stringifiedCategoryDataForm === localStorageCategoryDataForm) {
				return;
			} else {
				const localStorageCategory = JSON.parse(localStorageCategoryDataForm).category;
				if (newCategoryDataForm.category !== localStorageCategory) {
					const newCategoryDataForm: categoryDataForm = {
						category,
						step,
						categoryForm: getCategoryForm(category),
					};
					const stringifiedCategoryDataForm = JSON.stringify(newCategoryDataForm);

					return window.localStorage.setItem("categoryDataForm", stringifiedCategoryDataForm);
				}

				return window.localStorage.setItem("categoryDataForm", stringifiedCategoryDataForm);
			}
		} else {
			if (!localStorageCategoryDataForm) {
				const newCategoryDataForm: categoryDataForm = {
					category,
					step,
					categoryForm: getCategoryForm(category),
				};
				const stringifiedCategoryDataForm = JSON.stringify(newCategoryDataForm);
				window.localStorage.setItem("categoryDataForm", stringifiedCategoryDataForm);
				return window.localStorage.setItem("categoryDataForm", stringifiedCategoryDataForm);
			}
		}
	}
};

export const getDataCategoryForm = (path?: string) => {
	if (!path) {
		path = window?.location.pathname;
	}

	const pathNameArray = path.split("/").filter((element) => element.length);
	const category = pathNameArray[1];
	const step = Number(pathNameArray[2].charAt(pathNameArray[2].length - 1));

	const localStorageCategoryDataForm = window.localStorage.getItem("categoryDataForm");

	if (localStorageCategoryDataForm !== null) {
		if (localStorageCategoryDataForm === undefined) {
			return saveDataCategoryForm(category, step - 1, getCategoryForm(category));
		} else {
			saveDataCategoryForm(category, step - 1, JSON.parse(localStorageCategoryDataForm).categoryForm);
			return localStorageCategoryDataForm;
		}
	} else {
		if (localStorageCategoryDataForm === null) {
			return saveDataCategoryForm(category, step - 1, getCategoryForm(category));
		}
	}

	return localStorageCategoryDataForm;
};

export const handleAnswerFormClick = (value: string, step: number) => {
	if (value) {
		const localStorageCategoryDataForm = window.localStorage.getItem("categoryDataForm");
		if (localStorageCategoryDataForm) {
			const parsedData = JSON.parse(localStorageCategoryDataForm);
			const spreadData = { ...parsedData };
			spreadData.categoryForm[step].selectedAnswer.splice(0, 1, value);
			const stringifiedDataArray = JSON.stringify(spreadData);

			window.localStorage.setItem("categoryDataForm", stringifiedDataArray);

			return;
		}
		return null;
	}
};
