import { Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { FC } from "react";
import { ProjectCardProps } from "../redux/reducers/projects";

const ProjectCard: FC<ProjectCardProps> = ({ props }) => {
  const { image, title, description, type, odds } = props;
  return (
    <Card className="projectCard">
      <CardBody className="projectCard--body" padding={0}>
        <div>
          <Image src={image} width={300} height={300} alt="Test" objectFit="cover"></Image>
        </div>
      </CardBody>
      <CardFooter className="projectCard--bottom">
        <h1>{title}</h1>
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
