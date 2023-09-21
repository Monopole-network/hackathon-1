import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const allTypes = ["environmental", "social", "economic", "charity"]

type FiltersObject = {
  type?: string
  odds: string[],
};

const initialState: FiltersObject = {
  type: undefined,
  odds: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    resetFilters: () => {
      return initialState
    },
    changeType: (state, action: PayloadAction<string>) => {
      if (!allTypes.includes(action.payload)) return
      state.type = action.payload
      return state
    },
    addODD: (state, action: PayloadAction<string>) => {
      if (action.payload.trim().length === 0 || state.odds.includes(action.payload)) return
      state.odds.push(action.payload)
      return state
    },
    deleteODD: (state, action: PayloadAction<string>) => {
      if (action.payload.trim().length === 0 || state.odds.includes(action.payload)) return
      state.odds.slice(state.odds.indexOf(action.payload), 1)
    },
    clearODD: (state) => {
      state.odds = []
      return state
    }
  },
})

export const { resetFilters, changeType, addODD, deleteODD, clearODD } = filtersSlice.actions
export default filtersSlice.reducer