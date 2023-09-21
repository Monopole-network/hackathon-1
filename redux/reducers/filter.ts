import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const allTypes = ["environmental", "social", "economic", "charity"]

type FilterObject = {
  type?: string
  odds: string[],
};

const initialState: FilterObject = {
  type: undefined,
  odds: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    reset: (state) => {
      console.log("reducers result", initialState);
      state = initialState;
      console.log("reducers result 2", state);
    },
    changeType: (state, action: PayloadAction<string>) => {
      if (!allTypes.includes(action.payload)) return
      state.type = action.payload
    },
    addODD: (state, action: PayloadAction<string>) => {
      if (action.payload.trim().length === 0 || state.odds.includes(action.payload)) return
      state.odds.push(action.payload)
    },
    deleteODD: (state, action: PayloadAction<string>) => {
      if (action.payload.trim().length === 0 || state.odds.includes(action.payload)) return
      state.odds.slice(state.odds.indexOf(action.payload), 1)
    },
    clearODD: (state) => {
      state.odds = []
    }
  },
})

export const { reset, changeType, addODD, deleteODD, clearODD } = filtersSlice.actions
export default filtersSlice.reducer