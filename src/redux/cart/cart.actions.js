import CartActionTypes from "./cart.types";

export const toggleCartHidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

// This doesn't have a payload