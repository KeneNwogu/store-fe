// import state from "./state";

export default {
    ADD_TO_CART: (state, item) => {

        if(!state.cart.some(cart_item => cart_item._id == item._id)) {
            item.quantity = 1;
            state.cart.push(item);
        }
        else{
            let index = state.cart.map(function(e) { return e._id; }).indexOf(item._id);
            let cart_item = state.cart[index];
            console.log(cart_item)
            cart_item.quantity += 1
            state.cart.splice(index, 1, cart_item)
        }
    },

    REMOVE_FROM_CART: (state, item) => {
        if(state.cart.includes(item)) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1)
        }
    }, 

    // CLEAR_CART: (context) => {
    //     state.cart = [];
    // }
}