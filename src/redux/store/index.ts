import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import reducer from "./../reducers/songListReducer"
import { fetchResults } from '../actions';

const store = configureStore({
    reducer: reducer,
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export { store, fetchResults };
