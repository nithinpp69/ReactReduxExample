import { 
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../actionTypes/home_actionTypes';

export function fetchHomeFromAPI() {
    return (dispatch) => {
        fetch('https://randomuser.me/api/?results=10&nat=gb')
        .then(res => res.json())
        .then(json => dispatch(getHomeSuccess(json)))
        .catch(err => dispatch(getHomeFailure(err)))
    }
}
function getHomeSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

function getHomeFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}