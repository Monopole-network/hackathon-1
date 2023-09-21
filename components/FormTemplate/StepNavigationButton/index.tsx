import { Stack, Button, useSteps } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { saveDataCategoryForm } from "../logic.helper";
// import { getRightStep, mockedFormData, saveRightStep } from "../logic.helper";

export interface StepNavigationButtonProps {
	actualStep?: number;
	previousPageUrl: string;
	nextPageUrl?: string;
	data: any;
}

const StepNavigationButton = ({ actualStep, previousPageUrl, nextPageUrl, data }: StepNavigationButtonProps) => {
	const router = useRouter();
	return (
		<Stack spacing={4} direction="row" align="center">
			{actualStep && actualStep > 0 && (
				<Button
					size="lg"
					className={styles.button_Next}
					bg="none"
					onClick={() => {
						router.push(previousPageUrl);
					}}
				>
					Previous
				</Button>
			)}
			{nextPageUrl ? (
				<Button
					size="lg"
					className={styles.button_Next}
					bg="var(--gradient-primary, linear-gradient(86deg, #8135ff 3.04%, #ff006b 101.29%))"
					onClick={() => {
						if (actualStep !== undefined) {
							router.push(nextPageUrl);
						}
					}}
				>
					Next
				</Button>
			) : (
				<Button
					size="lg"
					className={styles.button_Next}
					bg="var(--gradient-primary, linear-gradient(86deg, #8135ff 3.04%, #ff006b 101.29%))"
					onClick={() => {
						console.log("to submit");
					}}
				>
					Submit
				</Button>
			)}
		</Stack>
	);
};

export default StepNavigationButton;
