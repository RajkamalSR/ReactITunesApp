import axios from 'axios';
import { ACTION_TYPES } from '../constants';

export const fetchResults = (searchTerm: string, offset?:number) => {
    return async (dispatch: any) => {
        try {
            dispatch({ type: ACTION_TYPES.FETCH_RESULTS_START });
            const baseURL: string = `https://itunes.apple.com/search?term=${searchTerm}&limit=20&offset=${offset}`
            const baseURL1:string = `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song`
            const response = await axios.get(baseURL);
            dispatch({ type: ACTION_TYPES.FETCH_RESULTS_SUCCESS, payload: response.data.results });
        } catch (error: any) {
            dispatch({ type: ACTION_TYPES.FETCH_RESULTS_FAILURE, payload: error.message });
        }
    };
};