import { START_AXIOS, AXIOS_SUCCESS, AXIOS_FAILURE } from "../actions";

const initialState = {
    smurfData: [],
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case START_AXIOS:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case AXIOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfData: action.payload
            };
        case AXIOS_FAILURE:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
};

export default reducer;