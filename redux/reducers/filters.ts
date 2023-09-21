import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const allTypes = ["environmental", "social", "economic", "charity"]

export type FiltersObject = {
  type?: string
};

const initialState: FiltersObject = {
  type: undefined,
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
  },
})

export const { resetFilters, changeType } = filtersSlice.actions
export default filtersSlice.reducer