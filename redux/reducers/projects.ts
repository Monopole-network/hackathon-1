import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProjectCardProps = {
  props: ProjectCardInfos;
};

export type ProjectCardInfos = {
  image: string;
  title: string;
  description: string;
  type: string;
  odds: string[];
  shown: boolean;
};

const initialState: ProjectCardInfos[] = [
  {
    image: "/assets/img/sdgs/01.png",
    title: "Project 1",
    description: "Project 1 description",
    type: "environmental",
    odds: [
      "clean_water_and_sanitation",
      "affordable_and_clean_energy",
      "responsible_consumption_and_production",
      "climate_action",],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/02.png",
    title: "Project 2",
    description: "Project 2 description",
    type: "environmental",
    odds: [
      "life_below_water",
      "life_on_land",],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/03.png",
    title: "Project 3",
    description: "Project 3 description",
    type: "social",
    odds: [
      "no_poverty",
      "zero_hunger",
      "good_health_and_well-being",
      "quality_education",
      "gender_equality",],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/04.png",
    title: "Project 4",
    description: "Project 4 description",
    type: "social",
    odds: [
      "reduced_inequality",
      "sustainable_cities_and_communities",
      "peace__justice_and_strong_institutions",],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/05.png",
    title: "Project 5",
    description: "Project 5 description",
    type: "economic",
    odds: [
      "decent_work_and_economic_growth",],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/06.png",
    title: "Project 6",
    description: "Project 6 description",
    type: "economic",
    odds: [
      "industry__innovation__and_infrastructure"],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/07.png",
    title: "Project 7",
    description: "Project 7 description",
    type: "charity",
    odds: ["partnerships_for_the_goals"],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/08.png",
    title: "Project 8",
    description: "Project 8 description",
    type: "charity",
    odds: [],
    shown: true,
  },
];

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    resetProjects: () => {
      return initialState
    },
    mapByType: (state, action: PayloadAction<string>) => {
      state.map((project) => project.shown = project.type === action.payload)
      return state
    },
    mapByODD: (state, action: PayloadAction<string[]>) => {
      resetProjects();
      if (action.payload.length > 0) {
        state.map((project) => {
          let shownValue = false;
          action.payload.forEach((odd) => {
            if (project.odds.includes(odd)) {
              shownValue = true;
              console.log(project.title, project.shown);
            }
          })
          project.shown = shownValue;
          return project;
        })
        return state
      }
    },
  },
})

export const { resetProjects, mapByType, mapByODD } = projectsSlice.actions
export default projectsSlice.reducer