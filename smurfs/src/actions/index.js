import axios from 'axios';

export const START_AXIOS = 'START_AXIOS';
export const AXIOS_SUCCESS = 'AXIOS_SUCCESS';
export const AXIOS_FAILURE = 'AXIOS_FAILURE';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_AXIOS });
    axios
        .get(
            "http://localhost:3333/smurfs"
)
    .then(response => dispatch({ type: AXIOS_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: AXIOS_FAILURE, payload: error.response}));
};

