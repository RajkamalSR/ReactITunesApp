import axios from 'axios';
import { ACTION_TYPES } from '../constants';

export const fetchResults = (searchTerm: string) => {
    return async (dispatch: any) => {
        try {
            dispatch({ type: ACTION_TYPES.FETCH_RESULTS_START });
            const response = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song`);
            dispatch({ type: ACTION_TYPES.FETCH_RESULTS_SUCCESS, payload: response.data.results });
        } catch (error: any) {
            dispatch({ type: ACTION_TYPES.FETCH_RESULTS_FAILURE, payload: error.message });
        }
    };
};