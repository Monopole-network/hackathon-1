import { NextPage } from "next";
import FormTemplate from "../../../components/FormTemplate/FormTemplate";
import RadioGroupInput from "../../../components/FormTemplate/RadioGroupInput";
import { useEffect, useState } from "react";
import { individualMockedFormData } from "../../../components/FormTemplate/logic.helper";
import { Spinner } from "@chakra-ui/react";

const Step1: NextPage = () => {
	const [stepForm, setStepForm] = useState({ ...individualMockedFormData[0] });
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
		<FormTemplate previousPageUrl="/pitch/company/step-1" nextPageUrl="/pitch/company/step-2">
			<RadioGroupInput radioInputGroupdata={stepForm} step={0} category={"company"} />
		</FormTemplate>
	);
};

export default Step1;
