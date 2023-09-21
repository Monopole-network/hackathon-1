import { Button, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ShieldCheckIcon, ShieldCheckLightIcon } from "../Icons";

const ProjectsBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="Projects">
      {router.pathname === "/projects" ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push("/projects");
          }}
          aria-label="Services button"
        >
          <ShieldCheckIcon height="24px" width="24px" />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push("/projects");
          }}
          aria-label="Services button"
        >
          <ShieldCheckLightIcon color="#646587" height="24px" width="24px" />
        </Button>
      )}
    </Tooltip>
  );
};

export default ProjectsBtn;
