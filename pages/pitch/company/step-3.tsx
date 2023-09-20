import { NextPage } from "next";
import FormTemplate from "../../../components/FormTemplate/FormTemplate";
import RadioGroupInput from "../../../components/FormTemplate/RadioGroupInput";
import { useEffect, useState } from "react";
import { individualMockedFormData } from "../../../components/FormTemplate/logic.helper";

const Step3: NextPage = () => {
	const [stepForm, setStepForm] = useState({ ...individualMockedFormData[2] });
	useEffect(() => {
		const stringifiedData = window.localStorage.getItem("categoryDataForm");
		if (stringifiedData) {
			const data = JSON.parse(stringifiedData);

			setStepForm(data.categoryForm[2]);
		}
	}, []);
	return (
		<>
			<FormTemplate previousPageUrl="/pitch/company/step-2" nextPageUrl="/pitch/company/step-3">
				<RadioGroupInput radioInputGroupdata={stepForm} step={2} category={"company"} />
			</FormTemplate>
		</>
	);
};

export default Step3;
