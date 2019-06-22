import Vue from 'vue';
const state = {
    currentPage: 1,
    products: [],
    productsCache: {},
    loadingProducts: true

}
const getters = {
    products: state => {
        return state.products;
    },
    currentPage: state => {
        return state.currentPage;
    },
    loadingProducts: state => {
        return state.loadingProducts;
    }

}
const actions = {
    getProducts(context, payload) {
        context.commit('setLoading', true);

        if (context.state.productsCache[payload.page]) {
            context.commit('updateProducts', {
                products: context.state.productsCache[payload.page],
                page: payload.page
            });
            context.commit('setLoading', false);
        } else {
            
            Vue.axios.get(`/products?_page=${payload.page}&_limit=7`).then(response => {


                context.commit('setLoading', false);

                console.log(response);
                context.commit('updateProducts', {
                    products: response.data,
                    page: payload.page
                })

            });
        }

    }
}
const mutations = {
    setLoading(state, payload) {
        if (payload) {
            Vue.prototype.$nprogress.start();
            state.loadingProducts = payload;
        } else {
            Vue.prototype.$nprogress.done();
            setTimeout(() => {
                state.loadingProducts = payload;

            }, 750);
        }
    },

    updateProducts(state, payload) {
        state.products = payload.products;
        state.productsCache[payload.page] = payload.products;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}