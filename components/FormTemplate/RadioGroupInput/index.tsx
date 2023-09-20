import { FormControl, FormLabel, RadioGroup, VStack, Radio, FormHelperText, useRadio } from "@chakra-ui/react";
import { CategoryMockedDataForm, handleAnswerFormClick, mockedFormDataType } from "../logic.helper";
import { useState } from "react";

type radioInputDataType = {
	radioInputGroupdata: mockedFormDataType;
	step: number;
	category: string;
};

const RadioInputGroup = ({ radioInputGroupdata, category, step }: radioInputDataType) => {
	const [selectedValue, setSelectedValue] = useState<string>();

	return (
		<FormControl as="fieldset" isRequired>
			<FormLabel as="legend">{radioInputGroupdata.question}</FormLabel>
			<RadioGroup
				defaultValue={selectedValue ? selectedValue : radioInputGroupdata.answer[0]}
				onChange={(value) => {
					handleAnswerFormClick(value, step);
					setSelectedValue(value);
				}}
				value={selectedValue}
			>
				<VStack spacing="24px">
					{radioInputGroupdata.answer.map((input, index) => {
						return (
							<Radio value={input} key={input}>
								{index}&nbsp;-&nbsp;{input}
							</Radio>
						);
					})}
				</VStack>
			</RadioGroup>
		</FormControl>
	);
};

export default RadioInputGroup;
