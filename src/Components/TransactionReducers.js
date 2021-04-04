const initial_state = {
    user_login_obj: {},
    product_data: {},
    got_data_product: false,
    items_picked: [],
}

const TransactionReducers = (state = initial_state, action) => {
    if (action.type == "GOT_USER_LOGIN_JSON")
        return { ...state, user_login_obj: action.user_login_obj }
    if (action.type == "GOT_PRODUCT_DATA")
        return { ...state, product_data: action.product_data, got_data_product: action.got_data_product }
    if (action.type == "ITEM_ADDED")
        return { ...state, items_picked: action.items_picked }
    return state;
}


export default TransactionReducers;