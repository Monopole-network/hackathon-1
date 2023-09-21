import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './reducers/filter';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
