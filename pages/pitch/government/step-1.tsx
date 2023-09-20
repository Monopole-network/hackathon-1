import { NextPage } from "next";
import FormTemplate from "../../../components/FormTemplate/FormTemplate";
import RadioGroupInput from "../../../components/FormTemplate/RadioGroupInput";

const Step1: NextPage = () => {
	const mockedRadioInputData = [
		{
			value: "string",
			name: "string",
		},
	];
	return (
		<>
			<FormTemplate previousPageUrl="/pitch/government/step-1" nextPageUrl="/pitch/government/step-2">
				{/* <RadioGroupInput radioInputGroupData={mockedRadioInputData} /> */}
			</FormTemplate>
		</>
	);
};

export default Step1;
