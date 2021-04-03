const initial_state = {
    user_login_obj: {},
    purchase_items: null,
    items_picked: [],
    items_wishlist: []
}

const TransactionReducers = (state = initial_state, action) => {
    if (action.type == "GOT_USER_LOGIN_JSON")
        return { ...state, user_login_obj: action.user_login_obj }
    return state;
}


export default TransactionReducers;