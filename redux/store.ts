import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper';
import {userReducer} from "./slices/user";

// import counterReducer from '../features/counter/counterSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer
        },
    })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
export const wrapper = createWrapper<RootStore>(makeStore);

