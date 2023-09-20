import { NextPage } from "next";
import FormTemplate from "../../../components/FormTemplate/FormTemplate";
import RadioGroupInput from "../../../components/FormTemplate/RadioGroupInput";

const Step3: NextPage = () => {
	return (
		<>
			<FormTemplate previousPageUrl="/pitch/individual/step-2" nextPageUrl="/pitch/individual/step-3">
				{/* <RadioGroupInput /> */}
			</FormTemplate>
		</>
	);
};

export default Step3;
