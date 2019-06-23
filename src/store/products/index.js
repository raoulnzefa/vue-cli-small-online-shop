import Vue from 'vue';
const state = {
    currentPage: 1,
    products: [],
    productsCache: {},
    loadingProducts: true,
    total: 0

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
    },
    getFormatedPrice: () => (price) => {
        if (!price) {
            return 0;
        }
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    pagesCount: state => {
        return parseInt(state.total / 7);
    },
    getTotalCount: state => {
        return state.total;
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


                context.commit('updateProducts', {
                    products: response.data,
                    page: payload.page,
                    total: response.headers['x-total-count']
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
        state.currentPage = payload.page;
        if (payload.total) {
            state.total = payload.total;
        }
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}