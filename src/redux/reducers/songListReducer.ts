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

export default reducer