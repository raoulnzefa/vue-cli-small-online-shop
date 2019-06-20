import Vue from 'vue';
let cart = window.localStorage.getItem('cart');

const state = {
    cart: cart ? JSON.parse(cart) : [],
    cartProducts: []

}
const getters = {
    cart: state => {

        return state.cart;
    }
}
const actions = {
    addProductToCart(context, payload) {
        context.commit('onAddProductToCart', payload);
    },
    getCartProducts(context) {
        let ProductsIp = context.state.cart.map(product => product.id);
        let ProductsIpQuery = ProductsIp.join('&id=');
        Vue.axios.get('/products?id=' + ProductsIpQuery).then(response => {
            context.commit('updateCartProducts', response.data);
        });

    }
}

const mutations = {
    saveCart(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    onAddProductToCart(state, payload) {
        let ProductFound = state.cart.find(product => product.id == payload.id);
        if (ProductFound) {
            ProductFound.quantity = payload.quantity;
        } else {
            state.cart.push(payload);
        }
        this.commit('saveCart');
    },
    updateCartProducts(state, products) {
        state.cartProducts = products;
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}