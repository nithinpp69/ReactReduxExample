    import { 
      FETCHING_DATA,
      FETCHING_DATA_SUCCESS,
      FETCHING_DATA_FAILURE
    } from '../actionTypes/home_actionTypes'

    const initialState = {
        home: [],
        isFetching: true,
        error: false
    }

    const homeReducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCHING_DATA_SUCCESS:
                state = Object.assign({}, state, 
                          { home: action.data,
                            isFetching: false,
                            error: false
                          });
                return state;
            case FETCHING_DATA_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: true
                }
            default:
                return state
        }
    }
    export default homeReducer;


    // const initialState = {
    //     home: [],
    //     isFetching: false,
    //     error:false
    // }
    
    // export default function homeReducer(state = initialState, action){
    //     switch(action.type) {
    //         case FETCHING_DATA:
    //             return {
    //                 ...state,
    //                 isFetching:true,
    //                 home:[]
    //             }
    //         case FETCHING_DATA_SUCCESS:
    //             return {
    //                 ...state,
    //                 isFetching:false,
    //                 home:action.data
    //             }
    //         case FETCHING_DATA_FAILURE:
    //             return {
    //                 ...state,
    //                 isFetching:false,
    //                 error:true
    //             }
    //         default:
    //             return state
    //     }
    // }