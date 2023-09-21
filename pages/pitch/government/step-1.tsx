import { NextPage } from "next";
import FormTemplate from "../../../components/FormTemplate/FormTemplate";
import RadioGroupInput from "../../../components/FormTemplate/RadioGroupInput";
import { useEffect, useState } from "react";
import { governmentMockedFormData } from "../../../components/FormTemplate/logic.helper";

const Step1: NextPage = () => {
	const [stepForm, setStepForm] = useState({ ...governmentMockedFormData[0] });
	useEffect(() => {
		const stringifiedData = window.localStorage.getItem("categoryDataForm");
		if (stringifiedData !== null) {
			const data = JSON.parse(stringifiedData);
			if (data) {
				setStepForm(data.categoryForm[0]);
			}
		}
	}, []);

	return (
		<FormTemplate previousPageUrl="/pitch/government/step-1" nextPageUrl="/pitch/government/step-2">
			<RadioGroupInput radioInputGroupdata={stepForm} step={0} category={"company"} />
		</FormTemplate>
	);
};

export default Step1;
