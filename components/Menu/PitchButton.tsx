import { Button, Icon, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PiQuestionBold } from "react-icons/pi";

const PitchBtn = () => {
	const router = useRouter();

	return (
		<Tooltip label="Pitch">
			{router.pathname === "/pitch" ? (
				<Button
					borderRadius="16px"
					height="48px"
					width="48px"
					background="transparent"
					border="2px solid #3A1888"
					onClick={() => {
						router.push("/pitch");
					}}
					aria-label="pitch button"
				>
					<Icon height="20px" width="20px" as={PiQuestionBold} />
				</Button>
			) : (
				<Button
					borderRadius="16px"
					height="48px"
					width="48px"
					background="transparent"
					onClick={() => {
						router.push("/pitch");
					}}
					aria-label="pitch button"
				>
					<Icon height="20px" width="20px" color="#646587" as={PiQuestionBold} />
				</Button>
			)}
		</Tooltip>
	);
};

export default PitchBtn;
