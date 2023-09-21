import { SearchIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, FormControl, Grid, Input } from "@chakra-ui/react";
import { NextPage } from "next";
import { FormEvent } from "react";
import ProjectCard from "../components/ProjectCard";
import React from "react";
import CategoryButton from "../components/CategoryButton";
import { useAppSelector } from "../hooks";
import SubFilter from "../components/SubFilter";

const ProjectsPage: NextPage = () => {
  const projects = useAppSelector((state) => state.projects);
  const filters = useAppSelector((state) => state.filters);
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
      </Flex>
      {filters.type !== undefined ? (
        <Grid className="subfilters">
          <SubFilter></SubFilter>
        </Grid>
      ) : (
        <></>
      )}
      <Grid
        className="projects"
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={8}
      >
        {projects.map((value, index) => {
          if (!value.shown) return;
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
