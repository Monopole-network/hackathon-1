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
		title: "Integrated Development",
		description: "Integrated Development",
		question:
			"How does this project fit into a holistic vision of sustainable development, covering both economic, social, and environmental aspects ?",
		answer: [
			"The project is designed with specific multidimensional objectives (specify below).",
			"The project has limited scope but could benefit from a more integrated approach (specify below).",
			"We are seeking guidance to strengthen its multidimensional integration.",
			"The project is focused on a specific area and is not intended to be multidimensional.",
		],
		selectedAnswer: [""],
		url: "/pitch/government/step-1",
	},
	{
		step: 1,
		title: "Cross-sectoral Collaboration",
		description: "Cross-sectoral Collaboration",
		question:
			"How does this project encourage cooperation between different sectors and stakeholders, including international partnerships, to achieve sustainable development goals ?",
		answer: [
			"We have established partnerships and collaborations for the project (specify below).",
			"We are in the phase of seeking partners or strengthening collaboration (specify below).",
			"We would like recommendations to improve cross-sectoral cooperation.",
			"The project is designed to operate independently.",
		],
		selectedAnswer: [""],
		url: "/pitch/government/step-2",
	},
];

export const companyMockedFormData = [
	{
		step: 0,
		title: "Environment & Resources",
		description: "Environment & Resources",
		question:
			"How does your company contribute to environmental preservation, sustainable management of natural resources, and reducing climate impact ?",
		answer: [
			"We have implemented specific initiatives for these areas (specify below)",
			"We integrate sustainable practices into our business model, but without specific initiatives (specify below)",
			"We have not yet integrated sustainable practices, but we are interested in recommendations",
			"This does not apply to our company/project",
		],
		selectedAnswer: [""],
		url: "/pitch/company/step-1",
	},
	{
		step: 1,
		title: "Social",
		description: "Social Well-being",
		question:
			"How does your company promote well-being, health, education, and equality in the workplace and in the community?",
		answer: [
			"We implement specific programs and initiatives (specify below).",
			"These aspects are present in our company culture, but without dedicated programs (specify below)",
			"This does not currently apply to our company/project",
			"This does not apply to our company/project",
		],
		selectedAnswer: [""],
		url: "/pitch/company/step-2",
	},
	{
		step: 2,
		title: "Governance and Partnership",
		description: "Governance and Partnership",
		question:
			"How does your company collaborate with other stakeholders, governments, or organizations, and ensure responsible and ethical conduct?",
		answer: [
			"We have implemented specific initiatives for these areas (specify below)",
			"We integrate sustainable practices into our business model, but without specific initiatives (specify below)",
			"We have not yet integrated sustainable practices, but we are interested in recommendations",
			"This does not apply to our company/project",
		],
		selectedAnswer: [""],
		url: "/pitch/company/step-3",
	},
];

export const individualMockedFormData = [
	{
		step: 0,
		title: "Community Improvement",
		description: "Community Improvement",
		question:
			"How does your project contribute to improving life in your community, in terms of health, education, or environment?",
		answer: [
			"My project has concrete actions in these areas (specify below).",
			"My project indirectly touches on these areas without specific objectives (specify below).",
			"I would like advice to better align my project with these areas.",
			"These areas are not relevant to my project.",
		],
		selectedAnswer: [""],
		url: "/pitch/step-1",
	},
	{
		step: 1,
		title: "Inclusion and Equality",
		description: "Inclusion and Equality",
		question:
			"Does your initiative promote equality, justice, or inclusion of all members of your community?",
		answer: [
			"Yes, it's a primary objective of my project (specify below).",
			"My project touches on these themes without it being the main objective (specify below).",
			"I am seeking guidance to strengthen these aspects.",
			"This does not apply to my project.",
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
