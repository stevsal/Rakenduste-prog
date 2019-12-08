import {
    ITEMS_SUCCESS, USER_UPDATE, ITEM_ADDED, TOKEN_UPDATE, ITEM_REMOVED
} from "./actions";
import  PropTypes from "prop-types";


export const UserPropTypes = {
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    cart: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const initialState = {
    token: null,
    user: null,
    items: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case TOKEN_UPDATE: {
            return {
                ...state,
                token: action.payload,
            };
        }
        case USER_UPDATE:
            return {
                ...state,
                user: action.payload,
            };
        case ITEMS_SUCCESS: {
            return {
                ...state,
                items: action.payload,
            };
        }
        case ITEM_REMOVED: {
            return {
                ...state,
                 user: removeItemFromCart(state.user, action.payload)
            };
        }
        case ITEM_ADDED: {
            return {
                ...state,
                user: addItemToCart(state.user, action.payload)
            };
        }
        default: {
            return state;
        }
    }
};

/*const removeItemById = (items, _id) => {
    const index = items.findIndex(item => item._id === _id);
    if(index === -1) return items;
    const copy = items.slice();
    copy.splice(index, 1);
    return copy;
};*/
const removeItemFromCart = (user, itemId) => {
    const foundItemIndex = user.cart.findIndex(cartId => cartId === itemId);
    if(foundItemIndex === -1) return user;
    const cartCopy = user.cart.slice();
    cartCopy.splice(foundItemIndex, 1);
    return {
        ...user,
        cart: cartCopy
    };
};

const addItemToCart = (user, itemId) => {
    return {
        ...user,
        cart: user.cart.concat([itemId])
    };
};
