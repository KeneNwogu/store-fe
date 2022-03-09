export default {
    addToCart: (context, item) => {
        context.commit('ADD_TO_CART', item);
    },

    removeFromCart: (context, item) => {
        context.commit('REMOVE_FROM_CART', item);
    }, 

    clearCart: (context) => {
        context.commit('CLEAR_CART');
    }
}