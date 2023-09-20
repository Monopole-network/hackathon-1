import { NextPage } from "next";
import FormTemplate from "../../../components/FormTemplate/FormTemplate";
import RadioGroupInput from "../../../components/FormTemplate/RadioGroupInput";

const Step2: NextPage = () => {
	return (
		<>
			<FormTemplate previousPageUrl="/pitch/government/step-1" nextPageUrl="/pitch/government/step-3">
				{/* <RadioGroupInput /> */}
			</FormTemplate>
		</>
	);
};

export default Step2;
