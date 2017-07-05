const initialState = {
    loading: null,
    loggingIn: false,
    error: null,
    currentUser: {
        name: '',
        uid: '',
    },
    currentQuestion: 0,
    questions: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'INITIATE_LOGIN':
            return {
                ...state,
                loggingIn: true
            }
        case 'CANCEL_LOGIN':
            return {
                ...state,
                loggingIn: false
            }
        default:
            return state;
    }
};

export default reducer;