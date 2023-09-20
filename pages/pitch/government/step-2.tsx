import { NextPage } from "next";
import FormTemplate from "../../../components/FormTemplate/FormTemplate";
import RadioGroupInput from "../../../components/FormTemplate/RadioGroupInput";
import { useEffect, useState } from "react";
import { governmentMockedFormData } from "../../../components/FormTemplate/logic.helper";

const Step2: NextPage = () => {
	const [stepForm, setStepForm] = useState({ ...governmentMockedFormData[1] });
	useEffect(() => {
		const stringifiedData = window.localStorage.getItem("categoryDataForm");
		if (stringifiedData !== null) {
			const data = JSON.parse(stringifiedData);
			if (data) {
				setStepForm(data.categoryForm[1]);
			}
		}
	}, []);

	return (
		<FormTemplate previousPageUrl="/pitch/government/step-1">
			<RadioGroupInput radioInputGroupdata={stepForm} step={1} category={"company"} />
		</FormTemplate>
	);
};

export default Step2;
