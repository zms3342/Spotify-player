//actual data layer data 
export const initialState = {
    user: null,
    playlists:[],
    playing : false, 
    items: null,
    //Set to null after dev
    token: "BQCVsqRE3u2_sY2BQ3EY6zkMtnhCHvpR-qU1W7mXC0nYh0BAviviOAuK1BWvRjoHO6sCpKymdaRCqSc0Pt2dR0J_0wHikKDR1s7A3_vjfUpwaVSeYSoj_EuQGCLpZPh6_RLHT2kxauBs8TVbPd1VX_2DZn8",
}

//takes a state and an action
//state: what it looks like
//action: changing of variable values
const reducer = (state, action) => {
    console.log(action);

    //case:type payload:user
    switch(action.type) { 
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        default: 
            return state;


    }

}

export default reducer;