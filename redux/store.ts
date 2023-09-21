import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './reducers/filters';
import { projectsSlice } from './reducers/projects';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    projects: projectsSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
