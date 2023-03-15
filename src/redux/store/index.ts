import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

interface State {
    searchTerm: string;
    results: Array<any>;
    loading: boolean;
    error: any;
}

const initialState: State = {
    searchTerm: '',
    results: [],
    loading: false,
    error: null,
};

const reducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case 'SEARCH_TERM_CHANGED':
            return { ...state, searchTerm: action.payload };
        case 'FETCH_RESULTS_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_RESULTS_SUCCESS':
            return { ...state, results: action.payload, loading: false, error: null };
        case 'FETCH_RESULTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const fetchResults = (searchTerm: string) => {
    return async (dispatch: any) => {
        try {
            dispatch({ type: 'FETCH_RESULTS_START' });

            const response = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song`);

            dispatch({ type: 'FETCH_RESULTS_SUCCESS', payload: response.data.results });
        } catch (error: any) {
            dispatch({ type: 'FETCH_RESULTS_FAILURE', payload: error.message });
        }
    };
};

//const store = createStore(reducer, applyMiddleware(thunk));

const store = configureStore({
    reducer: reducer,
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export { store, fetchResults };
