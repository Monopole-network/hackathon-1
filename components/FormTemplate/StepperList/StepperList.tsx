import {
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
	Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import theme from "../../../styles/theme";
import { useIsMobile } from "../../../hooks/useIsMobile";
type StepArrayProps = {
	stepList: {
		step: number;
		title: string;
		description: string;
		question: string;
		answer: string[];
		url: string;
	}[];
	actualStep?: number;
	setActualStep: any;
	data: any;
};

const StepperList: React.FC<StepArrayProps> = ({ actualStep, stepList, data }: StepArrayProps): JSX.Element => {
	const router = useRouter();
	const { activeStep, setActiveStep } = useSteps({
		index: actualStep,
		count: stepList?.length,
	});
	const isMobileView = useIsMobile();

	return (
		<Stepper
			index={activeStep}
			gap="16px"
			overflowX={"auto"}
			colorScheme={"green"}
			size="md"
			margin="16px 0"
			alignItems={"flex-start"}
		>
			{stepList?.map((step) => (
				<Step
					key={step.title}
					onClick={() => {
						router.push(step.url);
					}}
				>
					<StepIndicator>
						<StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
					</StepIndicator>

					<Box>
						<StepTitle>{step.title}</StepTitle>
						<StepDescription>{step.description}</StepDescription>
					</Box>

					<StepSeparator />
				</Step>
			))}
		</Stepper>
	);
};

export default StepperList;
