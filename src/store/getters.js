export default {
    cartTotalPrice(state) {
        return state.cart.reduce(function(total, item) {
            console.log(total)
           return total + (item.price * item.quantity)
        }, 0)
    }
}