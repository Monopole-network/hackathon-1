import { SearchIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, FormControl, Grid, Input } from "@chakra-ui/react";
import { NextPage } from "next";
import { FormEvent } from "react";
import ProjectCard, { ProjectCardInfos } from "../../components/ProjectCard";
import React from "react";
import CategoryButton from "../../components/CategoryButton";
import SubFilter from "../../components/SubFilter";

const exampleProjects: ProjectCardInfos[] = [
  {
    image: "/assets/img/sdgs/01.png",
    title: "Project 1",
    description: "Project 1 description",
    type: "environemental",
    odds: [],
  },
  {
    image: "/assets/img/sdgs/02.png",
    title: "Project 2",
    description: "Project 2 description",
    type: "environemental",
    odds: [],
  },
  {
    image: "/assets/img/sdgs/03.png",
    title: "Project 3",
    description: "Project 3 description",
    type: "environemental",
    odds: [],
  },
  {
    image: "/assets/img/sdgs/04.png",
    title: "Project 4",
    description: "Project 4 description",
    type: "environemental",
    odds: [],
  },
  {
    image: "/assets/img/sdgs/05.png",
    title: "Project 5",
    description: "Project 5 description",
    type: "environemental",
    odds: [],
  },
  {
    image: "/assets/img/sdgs/06.png",
    title: "Project 6",
    description: "Project 6 description",
    type: "environemental",
    odds: [],
  },
  {
    image: "/assets/img/sdgs/07.png",
    title: "Project 7",
    description: "Project 7 description",
    type: "environemental",
    odds: [],
  },
  {
    image: "/assets/img/sdgs/08.png",
    title: "Project 8",
    description: "Project 8 description",
    type: "environemental",
    odds: [],
  },
];

const ProjectsPage: NextPage = () => {
  const search = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Container maxW={"container.xl"}>
      <FormControl className="searchBar" onSubmit={search}>
        <Input type="text" placeholder="Search"></Input>
        <Button type="submit">
          <SearchIcon boxSize={4} w={4} h={4}></SearchIcon>
        </Button>
      </FormControl>
      <Flex className="filters">
        <CategoryButton
          props={{
            color: "green",
            type: "environmental",
          }}
        ></CategoryButton>
        <CategoryButton
          props={{
            color: "red",
            type: "social",
          }}
        ></CategoryButton>
        <CategoryButton
          props={{
            color: "blue",
            type: "economic",
          }}
        ></CategoryButton>
        <CategoryButton
          props={{
            color: "yellow",
            type: "charity",
          }}
        ></CategoryButton>
        <SubFilter />
      </Flex>
      <Grid
        className="projects"
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={8}
      >
        {exampleProjects.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <ProjectCard props={value}></ProjectCard>
            </React.Fragment>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
