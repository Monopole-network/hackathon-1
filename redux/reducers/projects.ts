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
    odds: [],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/02.png",
    title: "Project 2",
    description: "Project 2 description",
    type: "environmental",
    odds: [],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/03.png",
    title: "Project 3",
    description: "Project 3 description",
    type: "social",
    odds: [],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/04.png",
    title: "Project 4",
    description: "Project 4 description",
    type: "social",
    odds: [],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/05.png",
    title: "Project 5",
    description: "Project 5 description",
    type: "economic",
    odds: [],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/06.png",
    title: "Project 6",
    description: "Project 6 description",
    type: "economic",
    odds: [],
    shown: true,
  },
  {
    image: "/assets/img/sdgs/07.png",
    title: "Project 7",
    description: "Project 7 description",
    type: "charity",
    odds: [],
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
    mapByODD: (state, action: PayloadAction<string>) => {
      state.map((project) => project.shown = project.odds.includes(action.payload))
      return state
    },
  },
})

export const { resetProjects, mapByType, mapByODD } = projectsSlice.actions
export default projectsSlice.reducer